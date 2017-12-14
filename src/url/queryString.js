/**
 * 获取地址参数
 * @param {string} name - 参数名字
 * @param {string} [defaultValue=''] - 默认值
 * @param {string} [url=null] - 地址
 * @return {string}  - 如果存在name的参数返回实际的参数值，否则返回defaultValue或者空字符
 */
function queryString(name = '', defaultValue = '', url = null) {
  if (name === '') return defaultValue;
  url = url || location.search;
  /* eslint-disable */
  const result = url.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
  if (result == null || result.length < 1) {
    return defaultValue;
  }
  return result[1];
}

export default queryString;
