import { addTouchClass } from './modules/touch.js';
import { dropdown, Cursor } from './modules/functions.js';

window.addEventListener('load', init);

function init() {
  addTouchClass();
  dropdown();
  new Cursor().init();
}
