/**
 * 随机生成web颜色值
 * @return {String}
 * @example
 * var randomColor = require('js-weapon/randomColor');
 * randomColor();
 */
function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

module.exports = randomColor;
