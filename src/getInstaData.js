import axios from 'axios';

export default class GetInstaData {
  /**
   * @param tag
   * @return top posts object
   *
   * get top posts from searching tag result
  */
  static getTopPosts(tag) {
    return axios.get(`https://www.instagram.com/explore/tags/${encodeURI(tag)}/`)
      .then((res) => {
        const body = res.data;
        const anchor = body.indexOf('window._sharedData');
        const startIndex = body.indexOf('{"', anchor);
        const endIndex = body.indexOf(';</script>', startIndex);
        const srcScript = body.substring(startIndex, endIndex);
        const parsedData = JSON.parse(srcScript);
        try {
          if (parsedData.entry_data.TagPage[0].tag.top_posts.nodes) {
            return parsedData.entry_data.TagPage[0].tag.top_posts.nodes;
          }
          throw new Error('could not parse instagram data');
        } catch (err) {
          console.error('Failed to parsing instagram data', err);
        }
        return null;
      })
      .catch((err) => {
        console.error('Failed to fetch instagram data', err);
      });
  }

  /**
   * @param tag
   * @return recent posts object
   *
   * get recent posts from searching tag result
  */
  static getRecentPosts(tag) {
    return axios.get(`https://www.instagram.com/explore/tags/${encodeURI(tag)}/`)
      .then((res) => {
        const body = res.data;
        const anchor = body.indexOf('window._sharedData');
        const startIndex = body.indexOf('{"', anchor);
        const endIndex = body.indexOf(';</script>', startIndex);
        const srcScript = body.substring(startIndex, endIndex);
        const parsedData = JSON.parse(srcScript);
        try {
          if (parsedData.entry_data.TagPage[0].tag.media.nodes) {
            return parsedData.entry_data.TagPage[0].tag.media.nodes;
          }
          throw new Error('could not parse instagram data');
        } catch (err) {
          console.error('Failed to parsing instagram data', err);
        }
        return null;
      })
      .catch((err) => {
        console.error('Failed to fetch instagram data', err);
      });
  }
}
