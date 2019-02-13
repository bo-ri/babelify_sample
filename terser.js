var terser = require('terser');
var fs = require('fs');

var dest = terser.minify(fs.readFileSync("build-moment.js", {encoding: "utf-8"}));
fs.writeFileSync('dest-moment.js', dest.code);


