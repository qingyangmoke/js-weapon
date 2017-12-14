import queryString from '../src/url/queryString';
describe('URL API:', function () {
  // location.search = '?from=test1&to=test2';

  describe('#queryString()', function () {
    it(`queryString("from","","?from=test1&to=test2") should return test1`, function () {
      assert(queryString('from', '', '?from=test1&to=test2') === 'test1');
    });

    it(`queryString("to","","?from=test1&to=test2") should return test2`, function () {
      assert(queryString('to', '', '?from=test1&to=test2') === 'test2');
    });

    it(`queryString("noexists") should return ""`, function () {
      assert(queryString('noexists') === '');
    });

    it(`queryString("noexists","d1") should return "d1"`, function () {
      assert(queryString('noexists', 'd1') === 'd1');
    });
  });
});
