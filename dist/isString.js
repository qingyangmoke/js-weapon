/**
 * 判断是否为字符串类型
 * @param {any} value - 要判断的对象
 * @return {boolean}
  * @example
 * var isString = require('./isString');
 * isString('abc');
 */
function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
}

module.exports = isString;
