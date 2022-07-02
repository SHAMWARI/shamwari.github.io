export function dropdown() {
  document.addEventListener('mouseover', subMenu);
  const subMenuParentAll = document.querySelectorAll('.menu__dropdown');

  function subMenu(e) {
    const targetEvent = e.target;
    const subMenuParent = targetEvent.closest('.menu__dropdown');

    if (subMenuParent) {
      subMenuParentAll.forEach((item) => item.classList.remove('active'));
      subMenuParent.classList.add('active');
    } else {
      subMenuParentAll.forEach((item) => item.classList.remove('active'));
    }
  }
}

export class Cursor {
  constructor() {
    this.cursor;
    this.cursorAura;
  }

  init() {
    if (!document.documentElement.classList.contains('touch')) {
      document.body.insertAdjacentHTML(
        'afterbegin',
        `
          <div class="cursor"></div>
          <div class="cursorAura"></div>
        `
      );

      this.cursor = document.querySelector('.cursor');
      this.cursorAura = document.querySelector('.cursorAura');

      if (!document.documentElement.classList.contains('touch') && this.cursor && this.cursorAura) {
        document.addEventListener('mousemove', this.cursorMove);
        document.addEventListener('mousedown', this.cursorDown);
        document.addEventListener('mouseup', this.cursorUp);
        document.addEventListener('mouseout', this.cursorOut);
        document.addEventListener('mouseover', this.cursorOver);
      }
    }
  }

  cursorMove = (e) => {
    const cursorParams = {
      left: e.clientX,
      top: e.clientY,
    };

    if (e.target.getAttribute('data-hover') === 'true') {
      this.cursor.classList.add('active');
      this.cursorAura.classList.add('active');
    } else if (this.cursor.classList.contains('active') && this.cursorAura.classList.contains('active')) {
      this.cursor.classList.remove('active');
      this.cursorAura.classList.remove('active');
    }

    this.cursor.style.left = `${cursorParams.left}px`;
    this.cursorAura.style.left = `${cursorParams.left}px`;
    this.cursor.style.top = `${cursorParams.top}px`;
    this.cursorAura.style.top = `${cursorParams.top}px`;
  };
  cursorOver = () => {
    this.cursor.classList.remove('hidden');
    this.cursorAura.classList.remove('hidden');
  };

  cursorOut = () => {
    this.cursor.classList.add('hidden');
    this.cursorAura.classList.add('hidden');
  };

  cursorDown = () => {
    this.cursor.classList.add('click');
    this.cursorAura.classList.add('click');
  };

  cursorUp = () => {
    this.cursor.classList.remove('click');
    this.cursorAura.classList.remove('click');
  };
}
