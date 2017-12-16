import randomGuid from '../src/random/randomGuid';
import randomNumber from '../src/random/randomNumber';
describe('Random API:', function () {
  describe('#randomGuid()', function () {
    let guidid = '';
    it('guidID()', function () {
      guidid = randomGuid();
    });
    after(function () {
      console.log(guidid);
    });
  });

  describe('#randomNumber()', function () {
    let rnd = null;
    it(`randomNumber(0,100)`, function () {
      rnd = randomNumber(0, 100);
    });
    after(function () {
      console.log(rnd);
    });
  });
});
