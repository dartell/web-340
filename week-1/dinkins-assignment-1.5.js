/*
============================================
; Title:  Hello World
; Author: Darius Dinkins
; Date:   29 April 2020
; Modified By: Darius Dinkins
; Description: Recreating a node.js server example
;===========================================
*/

var http = require("http");

function processRequest(req, res) {

var body = "Node server test";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);
