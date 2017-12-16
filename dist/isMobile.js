
/**
 * 是否运行在移动设备
 * @return {boolean} - true or false
 * @example
 * var isMobile = require('./isMobile');
 * isMobile();
 */
function isMobile() {
  return /mobile|tablet|ip(ad|hone|od)|android|Windows Phone|BlackBerry|webOS/i.test(navigator.userAgent) || !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
}

module.exports = isMobile;
