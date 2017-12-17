/**
 * 是否isAndroid设备
 * @return {boolean} - true or false
 * @example
 * var isAndroid = require('./isAndroid');
 * isAndroid();
 */
function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

module.exports = isAndroid;