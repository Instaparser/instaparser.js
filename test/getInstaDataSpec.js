/*
  Parser Test case

  jasmine으로 Test작성시에 es6문법을 사용하려면 더 설정이 필요해서 es6문법을 사용하지 않음.
  최신 포스트와 Top 포스트 2가지를 테스트함.
  describe 2가지로 나눈 이유는 async로 요청을 해야하기 때문.
*/
var ParsedData = require('../dist/getInstaData').default;

/*
  Top 포스트 가져오기
 */
describe('Toppost ParsedData', function(){

  var resultData = null;

  beforeEach(function(done) {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    setTimeout(function() {
      var tag = "트와이스"
      ParsedData.getTopPosts(tag)
      .then((res) => {
        resultData = res;
        done();
      });

    }, 1000);
  });

  it('if i search a tag, i\'ll have to get correct instagram toppost data', function(){
    expect(resultData).not.toBe(null);
  });

});

/*
  최신 포스트 가져오기
 */
describe('RecentPost ParsedData', function(){

  var resultData = null;

  beforeEach(function(done) {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    setTimeout(function() {
      var tag = "트와이스"
      ParsedData.getRecentPosts(tag)
      .then((res) => {
        resultData = res;
        done();
      });

    }, 1000);
  });

  it('if i search a tag, i\'ll have to get correct instagram recent data', function(){
    expect(resultData).not.toBe(null);
  });
});

