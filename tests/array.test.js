import arrayEqual from '../src/array/arrayEqual';
import arrayRandomSort from '../src/array/arrayRandomSort';
describe('Array API:', function () {
  describe('#arrayEqual()', function () {
    it('arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
      assert(arrayEqual([1, 2, 3], [1, 2, 3]));
    });
    it(`arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
      assert.notEqual(arrayEqual([0, 2, 3], [1, 2, 3]));
    });
    const arr = [8, 2, 3, 4, 7, 8];
    it(`arrayEqual([${arr},${arr}]) should return true`, function () {
      assert(arrayEqual(arr, arr));
    });
  });

  describe('#arrayRandomSort()', function () {
    const arr = [8, 2, 3, 4, 7, 1];
    it(`arrayRandomSort(${arr})`, function () {
      arrayRandomSort(arr);
    });
    after(function () {
      console.log(arr);
    });
  });
});
