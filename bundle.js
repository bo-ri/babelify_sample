var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');

browserify({debug: true})
  .transform(babelify)
  .require('./moment.js', {entry: true})
  .bundle()
  .on('error', function(err){
    console.log('ERROR' + err.message);
  })
  .pipe(fs.createWriteStream('./build-moment.js'));


