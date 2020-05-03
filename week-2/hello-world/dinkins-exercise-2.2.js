/*
============================================
; Title:  Exercise 2.2 - Hello World with Express
; Author: Darius Dinkins
; Date:   3 May 2020
; Modified By: Darius Dinkins
; Description: Create an application folder, Create a package.json, Run npm install <moduleName> --save, run curl localhost:8080 test
;===========================================
*/

var express = require('express');  //Requires the express module
var http = require('http'); //Requires the http module


var app = express();  //calls the express function to start a new express application


//start Middleware
app.use(function(req,res){
    
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})
//end Middleware

//start server
http.createServer(app).listen(8080, function(){

    console.log('Application started on port %s', 8080);;
})
//end server