var fileModule = require('./file.js');

fileModule.write("test.txt", 'File Content 333');
fileModule.read("test.txt");
fileModule.remove('test.txt');