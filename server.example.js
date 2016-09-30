'use strict';
/* **********************************************************************
ExpreeJS server to run example code
*********************************************************************** */
const express = require('express');

const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/example`);

app.use('/jquery', express.static(`${__dirname}/node_modules/jquery/dist/`));
app.use('/slick', express.static(`${__dirname}/node_modules/slick-carousel/slick/`));
app.use('/js', express.static(`${__dirname}/example/js/`));
app.use('/css', express.static(`${__dirname}/example/css/`));

app.get('/', (req, res) => {
  const tag = process.env.TAG || 'hayeonsoo';
  let topPost;
  let recentPost;
  fs.readFile('./example/toppost.json', 'utf8', (err, data) => {

    if (err) throw err;
    topPost = JSON.parse(data);
    fs.readFile('./example/mostpost.json', 'utf8', (error, result) => {
      if (err) throw err;
      recentPost = JSON.parse(result);
      res.render('example', {
        tag,
        topPost,
        recentPost,
      });
    });
  });
});


app.listen(8081);

console.log('⚡️Example server is running on http://localhost:8081');
