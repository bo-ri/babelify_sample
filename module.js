var request = require('request');


function es_module(){
  request
  .get('https://wired.jp/wp-content/uploads/2018/01/GettyImages-522585140.jpg')
  .on('error', function(err) {
    console.log(err)
  })
  .on('data', (data) => {
    console.log('data');
  })
  .pipe(fs.createWriteStream('data.jpg'));
}

module.exports = es_module;