'use strict';

window.addEventListener('load', init);

function init() {
  // Dropdown меню
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

  // Курсор
  const cursor = document.querySelector('.cursor');
  const cursorAura = document.querySelector('.cursorAura');

  if (cursor && cursorAura) {
    document.addEventListener('mousemove', cursorMove);
    document.addEventListener('click', cursorClick);

    // События для исчезновения курсора когда он покидает вьюпорт
    document.addEventListener('mouseout', () => {
      cursor.classList.add('hidden');
      cursorAura.classList.add('hidden');
    });

    document.addEventListener('mouseover', () => {
      cursor.classList.remove('hidden');
      cursorAura.classList.remove('hidden');
    });

    function cursorMove(e) {
      if (!cursor.classList.contains('hidden') && !cursorAura.classList.contains('hidden')) {
        // Атрибут который позволяет включить или отключить эффект наведения у курсора
        if (e.target.getAttribute('data-hover') === 'true') {
          cursor.classList.add('active');
          cursorAura.classList.add('active');
        } else if (cursor.classList.contains('active') && cursorAura.classList.contains('active')) {
          cursor.classList.remove('active');
          cursorAura.classList.remove('active');
        }
        console.log(e.target);

        // Положение курсора относительно страницы
        const cursorParams = {
          left: e.clientX,
          auraLeft: e.clientX,
          top: e.clientY,
          auraTop: e.clientY,
        };

        // Стили позиционирования курсора
        cursor.style.left = `${cursorParams.left}px`;
        cursorAura.style.left = `${cursorParams.auraLeft}px`;
        cursor.style.top = `${cursorParams.top}px`;
        cursorAura.style.top = `${cursorParams.auraTop}px`;
      }
    }

    function cursorClick() {
      if (!cursor.classList.contains('click') && !cursorAura.classList.contains('click')) {
        setTimeout(() => {
          cursor.classList.remove('click');
          cursorAura.classList.remove('click');
          setTimeout(() => {}, 200);
        }, 100);
        cursor.classList.add('click');
        cursorAura.classList.add('click');
      }
    }
  }
}
