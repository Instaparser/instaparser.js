/*
  예제를 돌리기위한 node server 설정입니다.
  express를 사용하였습니다.
 */

var express = require('express');
var app = express();
var fs = require('fs');
var config = require('./config.json');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/example');

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/slick', express.static(__dirname + '/node_modules/slick-carousel/slick/'));
app.use('/js', express.static(__dirname + '/example/js/'));
app.use('/css', express.static(__dirname + '/example/css/'));



app.get('/', function(req, res) {
  var tag = config.tag;
  var topPost;
  var recentPost;
  fs.readFile('./example/toppost.json', 'utf8', function (err, data) {
    if (err) throw err;
    topPost = JSON.parse(data);
    fs.readFile('./example/mostpost.json', 'utf8', function (err, data) {
      if (err) throw err;
      recentPost = JSON.parse(data);
      res.render('example',{
        "tag": tag,
        "topPost": topPost,
        "recentPost": recentPost
      });
    });
  });
});


app.listen(8081);
console.log('8081 connect');