/**
 * 判断某个dom元素是否可视区域
 * @author 清扬陌客
 * @param {HTMLElement|JQuery} el 要判断的dom元素 支持jQuery对象
 * @param {Boolean} allInViewport 是否严格要求全部在viewport true 必须全部在viewport里才算是在viewport中 false 有一小部分在viewport就算是在
 * @param {number} diff 允许多少误差 正数
 * @description 判断某个dom元素是否可视区域
 * @version 1.0.0
 * @see http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
 */
function elementInViewport(el, allInViewport = false, diff = 0) {
  if (!el) return false;
  allInViewport = allInViewport || false;
  diff = diff || 0;
  const rect = el.getBoundingClientRect();
  const w = rect.right - rect.left;
  const h = rect.bottom - rect.top;
  const screenWidth = (window.innerWidth || document.documentElement.clientWidth);/*or $(window).height() */
  const screenHeight = (window.innerHeight || document.documentElement.clientHeight);/*or $(window).width() */
  if (allInViewport) {
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= screenHeight &&
      rect.right <= screenWidth
    );
  } else {
    return (
      rect.top > (-h - diff) &&
      rect.left > (-w - diff) &&
      rect.top < (screenHeight + diff) &&
      rect.left < (screenWidth + diff)
    );
  }
}

export default elementInViewport;
