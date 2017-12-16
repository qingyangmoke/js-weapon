/**
 * 是否ios设备
 * @return {boolean} - true or false
 * @example
 * var isIOS = require('./isIOS');
 * isIOS();
 */
function isIOS() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

module.exports = isIOS;
