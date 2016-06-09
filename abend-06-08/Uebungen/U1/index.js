var counterModule = require('./numbers.js');
var fs = require('fs');

var path = "test.txt";

fs.readFile(path, function(err, content) {
    if (err) return console.error(err);
    console.log('content of file: %s\n', path);
    console.log(content.toString());
});

counterModule.showNumbers(10, 20);
