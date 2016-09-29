import GetInstaData from './getInstaData';

// parser().then((res) => {
//   console.log(`all tasks are done! ${res}`);
// });
GetInstaData.getTopPosts('트와이스')
  .then((res) => {
    console.log(res);
    console.log('All tasks are done!');
  });
