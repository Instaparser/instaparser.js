import GetInstaData from '../src/getInstaData';
import fs from 'fs';
import path from 'path';

/* this is a test code */

GetInstaData.getTopPosts('트와이스')
 .then((res) => {

    let file = path.join(__dirname, './', "toppost.json");
    let json = JSON.stringify(res);

    fs.writeFile(file,json,function(res){
      console.log(json);
    });
    console.log('Toppost : All tasks are done!');
   });

GetInstaData.getRecentPosts('트와이스')
  .then((res) => {
    let file = path.join(__dirname, './', "mostpost.json");
    let json = JSON.stringify(res);

    fs.writeFile(file,json,function(res){
      console.log(json);
    });

    console.log('Mostpost : All tasks are done!');

  });

export default GetInstaData;
