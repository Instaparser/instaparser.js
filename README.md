# instaparser.js
:camera: Unofficial instagram parser to get Instagram photos data by tag search in node-side.

Initial environment is made by [npm-webpack-boilerplate](https://github.com/JeffGuKang/npm-webpack-boilerplate).

## Installation

instaparser is available on NPM:

```
npm install instaparser
```

## Basic Usage
**getTopPosts(tag<String>)**

Find top 9 Instagram posts data from the tag.
This method return Promise

Example
```
// CommonJS
var Instaparser = require("instaparser");

Instaparser.getTopPosts('catsagram')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    throw new Error(err);
  });
```

**getRecentPosts(tag<String>)**

Find recent 9 Instagram posts data from the tag.
This method return Promise

Example
```
// CommonJS
var Instaparser = require("instaparser");

Instaparser.getRecentPosts('catsagram')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    throw new Error(err);
  });
```


## Development

### instaparser.js Architecture
![instaparser.js Architecture](/images/architecture.PNG)

### Install
`npm install`

Dependency module install.

### Build
`npm run build`

Do some magic with ES6 to create ES5 code.

### Test
`npm run test`

Run test with [jasmine](http://jasmine.github.io/2.5/introduction.html) + [jasmine-node](https://github.com/mhevery/jasmine-node)

### Example
You can find example implementations in the [`example/`](example/) directory.

Example server excute
*  Mac : `TAG="keyword" npm run example`
*  Windows
	- The first method `set TAG="keyord"` and `npm run example`
	- The second method `example/example.cmd`

You can see result in
*  Mac : http://0.0.0.0:8081
*  Windows : http://localhost:8081

### Make `.json` file

Make json file using instaparser.

`npm run jsonfile`


### Develop
`npm run dev`

Run develop server
You can see result in

* OS X : http://0.0.0.0:8080

* Windows : http://localhost:8080

### Example page
![example](./images/example.PNG)



## License
```
MIT License

Copyright (c) 2016 instaparser Team.
```
