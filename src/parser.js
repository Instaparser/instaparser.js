import axios from 'axios';

function getData() {
  axios.get('https://www.instagram.com/explore/tags/twice')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default getData;
