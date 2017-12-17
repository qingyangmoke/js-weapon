const prefixes = ['-webkit-', '', '-ms-', '-o-', 'moz'];
const $dom = document.documentElement || document.createElement('div');
/**
* 自动增加前缀 如果样式不支持 则返回空字符
* @param {string} styleName - 样式名称 如transform
* @return {string} - 如 ： -webkit-transform 如果样式不支持 则返回空字符
* @example
* var prefixStyle = require('./prefixStyle');
* var newStyle = prefixStyle('transform');
* if(newStyle === '') {
*    console.log('样式不支持');
* }
*/
function prefixStyle(styleName) {
  if (!styleName) return styleName;
  prefixes.forEach((e) => {
    const prefixStyleName = `${e}${styleName}`;
    if (prefixStyleName in $dom.style) {
      return prefixStyleName;
    }
  });
  return '';
}

module.exports = prefixStyle;
