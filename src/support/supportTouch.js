/**
 * 是否支持触摸手势
 * @return {boolean} - true or false
 * @example
 * var supportTouch = require('js-weapon/supportTouch');
 * supportTouch();
 */
function supportTouch() {
  return 'ontouchstart' in window;
}

module.exports = supportTouch;
