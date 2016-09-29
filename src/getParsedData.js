import request from 'request';

export const getParsedData = (/* keyword */) => { // TODO: It should get tag keyword to crawl
  return new Promise((resolve, reject) => {
    request('https://www.instagram.com/explore/tags/%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4/', (error, response, body) => { // TODO: It should be dynamic
      if (!error && response.statusCode === 200) {
        const anchor = body.indexOf('window._sharedData');
        const startIndex = body.indexOf('{"', anchor);
        const endIndex = body.indexOf(';</script>', startIndex);
        const srcScript = body.substring(startIndex, endIndex);
        const parsedData = JSON.parse(srcScript);
        // console.log(srcScript);
        try {
          if (parsedData.entry_data.TagPage[0].tag.top_posts.nodes) {
            resolve(parsedData.entry_data.TagPage[0].tag.top_posts.nodes);
          } else {
            throw new Error('could not parse instagram data');
          }
        } catch (err) {
          reject(err);
        }
      } else {
        const errorObj = new Error('could not parse instagram data');
        reject(errorObj);
      }
    });
  });
};

export default class GetInstaData {
  static getTopPosts(tag) {
    return new Promise((resolve, reject) => {
      request(`https://www.instagram.com/explore/tags/${encodeURI(tag)}/`, (error, response, body) => { // TODO: It should be dynamic
        if (!error && response.statusCode === 200) {
          const anchor = body.indexOf('window._sharedData');
          const startIndex = body.indexOf('{"', anchor);
          const endIndex = body.indexOf(';</script>', startIndex);
          const srcScript = body.substring(startIndex, endIndex);
          const parsedData = JSON.parse(srcScript);
          // console.log(srcScript);
          try {
            if (parsedData.entry_data.TagPage[0].tag.top_posts.nodes) {
              resolve(parsedData.entry_data.TagPage[0].tag.top_posts.nodes);
            } else {
              throw new Error('could not parse instagram data');
            }
          } catch (err) {
            reject(err);
          }
        } else {
          const errorObj = new Error('could not parse instagram data');
          reject(errorObj);
        }
      });
    });
  }
}
