const request = require('request');
request('https://www.instagram.com/explore/tags/%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4/', (error, response, body) => {
  if (!error && response.statusCode == 200) {
    const anchor = body.indexOf('window._sharedData');
    const startIndex = body.indexOf('{"', anchor);
    const endIndex = body.indexOf(';</script>', startIndex);
    const srcScript = body.substring(startIndex, endIndex);
    const parsedData = JSON.parse(srcScript);
    console.log(parsedData);
  }
});
