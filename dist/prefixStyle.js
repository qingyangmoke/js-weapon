const prefixes = ['-webkit-', '-ms-', '-o-', 'moz'];
const $dom = document.documentElement || document.createElement('div');
/**
* 自动增加前缀
* @param {string} styleName - 样式名称 如transform
* @return {string} - -webkit-transform
* @example
* var prefixStyle = require('./prefixStyle');
* prefixStyle('transform');
*/
function prefixStyle(styleName) {
  if (!styleName) return styleName;
  prefixes.forEach((e) => {
    const prefixStyleName = `${e}${styleName}`;
    if (prefixStyleName in $dom.style) {
      return prefixStyleName;
    }
  });
  return styleName;
}

module.exports = prefixStyle;
