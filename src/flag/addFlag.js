/**
 * 增加一个位标示
 * @param {number} source - 目标的数字
 * @param {number} flag - 要添加的flag
 * @return {number}
 * @example
 * var addFlag = require('js-weapon/addFlag');
 * addFlag(3,4);
 */
function addFlag(source, flag) {
  return source | flag;
}

module.exports = addFlag;
