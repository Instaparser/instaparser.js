import axios from 'axios';

function getData() {
  axios.get('https://www.instagram.com/explore/tags/twice')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default getData
