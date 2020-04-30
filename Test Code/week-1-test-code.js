
//Modules
var url = require("url");

var parsedURL = url.parse("https://www.example.com/profile?name=smith");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

//Node.js Server Example
var http = require("http");

function processRequest(req, res) {

var body = "Hello World";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);