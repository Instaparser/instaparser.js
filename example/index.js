import fs from 'fs';
import path from 'path';
import GetInstaData from '../src/getInstaData';
import config from '../config.json';

/* this is a example code */

GetInstaData.getTopPosts(config.tag)
  .then((res) => {
    const file = path.join(__dirname, './', 'toppost.json');
    const json = JSON.stringify(res);

    fs.writeFile(file, json, (result) => {
      console.log(result);
      console.log('Toppost : All tasks are done!');
    });
  });

GetInstaData.getRecentPosts(config.tag)
  .then((res) => {
    const file = path.join(__dirname, './', 'mostpost.json');
    const json = JSON.stringify(res);

    fs.writeFile(file, json, (result) => {
      console.log(result);
      console.log('Mostpost : All tasks are done!');
    });
  });

export default GetInstaData;
