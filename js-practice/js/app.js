import { addTouchClass } from './modules/touch.js';
import { dropdown, cursor } from './modules/functions.js';

window.addEventListener('load', init);

function init() {
  addTouchClass();
  dropdown();
  cursor();
}
