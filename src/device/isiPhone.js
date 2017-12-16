/**
 * 是否iPhone设备
 * @return {boolean} - true or false
 * @example
 * var isiPhone = require('js-weapon/isiPhone');
 * isiPhone();
 */
function isiPhone() {
  return /iphone/i.test(navigator.userAgent);
}

module.exports = isiPhone;
