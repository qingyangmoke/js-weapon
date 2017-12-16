/**
 * 是否 windows phone
 * @return {boolean} - true or false
 * @example
 * var isWindowsPhone = require('./isWindowsPhone');
 * isWindowsPhone();
 */
function isWindowsPhone() {
  return /Windows Phone/i.test(navigator.userAgent);
}

module.exports = isWindowsPhone;
