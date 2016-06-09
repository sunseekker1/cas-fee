const http = require('http');
const url = require('url');

const counterModule = require('./numbers.js');
const fileModule = require('./file.js');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');


    var urlParts = url.parse(req.url);
    var queryString = urlParts.query || ' ';
    var queryStringValues = {};
    var output = 'Hello World\n';

    if (queryString.length){
        var parseQueryString = function( queryString ) {
            var params = {};
            var queries;
            var temp;
            var i;
            var l;

            // Split into key/value pairs
            queries = queryString.split("&");

            // Convert the array of strings into an object
            for ( i = 0, l = queries.length; i < l; i++ ) {
                temp = queries[i].split('=');
                params[temp[0]] = temp[1];
            }

            return params;
        };

        queryStringValues = parseQueryString(queryString);
    }



    switch(urlParts.pathname) {
        case '/':
            console.log("display root");
            break;
        case '/number':
            console.log("display number");
            counterModule.showNumbers(Number(queryStringValues['min']), Number(queryStringValues['max']));
            break;
        case '/file':
            console.log("write file");
            fileModule.write(queryStringValues.name + '.txt', decodeURI(queryStringValues.value));
            output = fileModule.read(queryStringValues.name);

            break;
        case '/remove':
            console.log("remove file");
            fileModule.remove(queryStringValues.name);
            break;
        case '/sendFile':
            console.log("display sendFile");
            break;
        default:
            console.log("display root");
    }

    res.end(output);



});



server.listen(port, hostname, function () {
    console.log('Server running at http://'+ hostname +':'+ port +'/');
});
