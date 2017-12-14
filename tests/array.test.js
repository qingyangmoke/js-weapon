import arrayEqual from '../src/array/arrayEqual';
describe('Array API:', function () {
  describe('#arrayEqual()', function () {
    it('outils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
      assert(arrayEqual([1, 2, 3], [1, 2, 3]));
    });
    it(`outils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
      assert.notEqual(arrayEqual([0, 2, 3], [1, 2, 3]));
    });
    const arr = [8, 2, 3, 4, 7, 8];
    it(`outils.arrayEqual([${arr},${arr}]) should return true`, function () {
      assert(arrayEqual(arr, arr));
    });
  });
});
