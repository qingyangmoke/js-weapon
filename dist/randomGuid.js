function _p8(s) {
  const p = (Math.random().toString(16) + '000000000').substr(2, 8);
  return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
}
/**
 * 创建 guid id
 * @return {String} guidid
 * @example
 * var guidID = require('./guidID');
 * guidID();
 */
function randomGuid() {
  return _p8(false) + _p8(true) + _p8(true) + _p8(false);
}

module.exports = randomGuid;
