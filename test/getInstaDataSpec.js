/*
  Parser Test case
*/

// import ParsedData from './../src/getInstaData.js';
var ParsedData = require('../dist/getInstaData').default;


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

