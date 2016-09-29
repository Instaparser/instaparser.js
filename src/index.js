import GetInstaData, { getParsedData } from './getParsedData';

getParsedData()
  .then((parsedData) => {
    console.log(`getting insta data is succeeded! ${parsedData}`);
  })
  .catch((err) => {
    console.error(err);
  });

GetInstaData.getTopPosts('트와이스')
.then((parsedData) => {
  console.log(`getting insta data is succeeded! ${parsedData}`);
})
.catch((err) => {
  console.error(err);
});
