var fs = require('fs');

function write(name, content){
    fs.writeFile(name, content, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}

function read(name){
    fs.readFile(name, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        console.log("read(): ", data);
        return data;
    });
}

function remove(name){
    fs.unlink(name, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File deleted successfully!");
    });
}


module.exports = {write: write, read: read, remove: remove};

