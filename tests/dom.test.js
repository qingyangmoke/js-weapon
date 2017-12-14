import elementInViewport from '../src/dom/elementInViewport';
describe('DOM API:', function () {
  const $elem = document.createElement('DIV');
  $elem.style.width = 100;
  $elem.style.height = 100;
  $elem.style.position = 'absolute';
  const $body = document.body;
  $body.style.position = 'relative';
  $body.style.width = '200px';
  $body.style.height = '200px';
  $body.appendChild($elem);

  // 在视线内
  describe('#elementInViewport()', function () {
    before(function () {
      $elem.style.top = '0px';
      $elem.style.left = '0px';
    });
    it(`elementInViewport() should return true`, function () {
      assert(elementInViewport($elem, false));
    });
  });

  // 在屏幕外
  describe('#elementInViewport()', function () {
    before(function () {
      $elem.style.top = '0px';
      $elem.style.left = '-200px';
    });
    it(`elementInViewport() should return false`, function () {
      assert.notEqual(elementInViewport($elem, false));
    });
    after(function () {
      $elem.style.top = '0px';
      $elem.style.left = '0px';
    });
  });
});
