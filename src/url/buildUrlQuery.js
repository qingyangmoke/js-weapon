/**
* 把对象转换成字符串参数 {a:"a1",b:"b1"} => "a=a1&b=b1"。
 * @param {Object} object - 对象
 * @return {string}  - 如果存在name的参数返回实际的参数值，否则返回defaultValue或者空字符
 * @example
 * var buildUrlQuery = require('js-weapon/buildUrlQuery');
 * var from = buildUrlQuery({a:"a1",b:"b1"}});
*/
function buildUrlQuery(object) {
  if (!object) return '';
  var encodedString = '';
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (encodedString.length > 0) {
        encodedString += '&';
      }
      encodedString += encodeURI(prop + '=' + object[prop]);
    }
  }
  return encodedString;
}

module.exports = buildUrlQuery;
