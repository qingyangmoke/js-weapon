/**
 * 覆盖原生的isNaN()方法实现，在不同浏览器上有2~10倍性能提升。
 * @param {any} value - 要判断的值
 * @return {boolean}
 * @example
 * var isNaN = require('./isNaN');
 * isNaN('01');
 */
function isNaN(value) {
  value = +value;
  /* eslint-disable */
  return value !== value;
}

module.exports = isNaN;
