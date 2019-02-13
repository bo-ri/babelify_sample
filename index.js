var moment = require('moment');
var _ = require('lodash');
var es_module = require('module');
var debug = require('debug');

function sample(cb){
  console.log(1);
  var err = null;
  cb(moment().toDate());
}

sample((res) => {
  console.log(res);
})

var events = _.filter([1, 2, 3, 4, 5, 6], (num) => {
  return num % 2 == 0;
})

console.log(events);

es_module;
