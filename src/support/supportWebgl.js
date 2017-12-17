let _suportWebgl = null;
/**
 * 是否支持 webgl
 * @return {boolean} - true or false
 * @example
 * var suportWebgl = require('js-weapon/suportWebgl');
 * suportWebgl();
 */
function suportWebgl() {
  if (_suportWebgl === null) {
    // 只检测一次
    try {
      const canvas = document.createElement('canvas');
      _suportWebgl = !!(window['WebGLRenderingContext'] && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      _suportWebgl = false;
    }
    return !!_suportWebgl;
  } else {
    return !!_suportWebgl;
  }
}

module.exports = suportWebgl;
