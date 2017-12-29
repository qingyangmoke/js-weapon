/**
 * 覆盖原生的round()方法实现，在不同浏览器上有2~10倍性能提升。
 * @param {Number} value - 要判断的值
 * @return {Number}
 * @example
 * var roundNumber = require('js-weapon/roundNumber');
 * roundNumber(0.5) === 0.5;
 */
function round(value) {
  var rounded;
  rounded = (0.5 + value) | 0;
  // A double bitwise not.
  rounded = ~~(0.5 + value);
  // Finally, a left bitwise shift.
  rounded = (0.5 + value) << 0;
  return rounded;
}

module.exports = round;
