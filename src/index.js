import GetInstaData from './getInstaData';
import fs from 'fs';
import path from 'path';

// parser().then((res) => {
//   console.log(`all tasks are done! ${res}`);
// });
GetInstaData.getTopPosts('트와이스')
  .then((res) => {
    // console.log(res);

    let file = path.join(__dirname, './', "toppost.json");
    let json = JSON.stringify(res);

    fs.writeFile(file,json,function(res){
      console.log(res);
    });

    console.log('All tasks are done!');
  });
