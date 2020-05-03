/*
============================================
; Title:  Exercise 2.3 - Routes
; Author: Darius Dinkins
; Date:   3 May 2020
; Modified By: Darius Dinkins
; Description: Discovering the basics of routes using express
;===========================================
*/

var express = require("express"); //requires express

var http = require("http");  //requires http

var app = express();;

app.get("/", function(request, response){  //This function is called when a request to the root is made

    response.end("This is the homepage!");;
});

app.get("/about", function(request, response){ //This function is called when a request to the /about is made
    response.end("The about page!");
});

app.get("/contact", function(request, response){ //This function is called when a request to the /contact is made

    response.end("Contact page!");
});

app.use(function(request, response) { ////This function is called when any other request is made

    response.statusCode = 404;

    response.end("404! Game over man!");

});

http.createServer(app).listen(8080);  //creates server