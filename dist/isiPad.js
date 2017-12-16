/**
 * 是否iPad设备
 * @return {boolean} - true or false
 * @example
 * var isiPad = require('./isiPad');
 * isiPad();
 */
function isiPad() {
  return /iPad/i.test(navigator.userAgent);
}

module.exports = isiPad;
