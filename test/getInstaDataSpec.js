/*
  Parser Test case
*/

// import ParsedData from './../src/getInstaData.js';
var ParsedData = require('../dist/getInstaData').default;


describe('ParsedData', function(){

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

  it('if i search a tag, i\'ll have to get correct instagram data', function(){
    console.log(resultData)
    expect(resultData).not.toBe(null);

  });
});

