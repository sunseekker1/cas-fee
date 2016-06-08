var http = require("http");
//1337, '127.0.0.1'
var req = http.request( {hostname: "localhost", port: 3000, path : "/test?text=Hello", method: "GET"}, function(res){
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.end();