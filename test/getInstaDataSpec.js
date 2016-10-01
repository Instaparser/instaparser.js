/*
  Parser Test case

  To use the Test es6 grammar when writing a jasmine because it requires no additional configuration es6 grammar is not used.
  Was tested under the latest posts and Post Top 2 things, why divided into two describe below is due to be requested in async.
*/
var ParsedData = require('../dist/getInstaData').default;

/*
  Get Top Posts
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
  Get Recent Posts
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

