const prefixStyle = require('./prefixStyle');
const $dom = document.documentElement || document.createElement('div');
const _supportTransforms3d = prefixStyle('perspective') in $dom.style;
/**
 * 是否支持3d
 * @return {boolean} - true or false
 * @example
* var supportTransforms3d = require('js-weapon/supportTransforms3d');
* supportTransforms3d()
 */
function supportTransforms3d() {
  return _supportTransforms3d;
}

module.exports = supportTransforms3d;
