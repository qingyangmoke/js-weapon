/**
 * 是否在微信客户端中运行
 * @return {boolean} - true or false
 * @example
 * var isWeixin = require('./isWeixin');
 * isWeixin();
 */
function isWeixin() {
  return /Micromessenger/i.test(navigator.userAgent);
}

module.exports = isWeixin;
