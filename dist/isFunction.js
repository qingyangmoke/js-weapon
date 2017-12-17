/**
 * 判断是否为函数
 * @param {any} fn - 要判断的对象
 * @return {boolean}
  * @example
 * var isFunction = require('./isFunction');
 * isFunction(callback);
 */
function isFunction(fn) {
  return Object.prototype.toString.call(fn) === '[object Function]';
}

module.exports = isFunction;
