/**
 * 是否iPod设备
 * @return {boolean} - true or false
 * @example
 * var isiPod = require('js-weapon/isiPod');
 * isiPod();
 */
function isiPod() {
  return /iPod/i.test(navigator.userAgent);
}

module.exports = isiPod;
