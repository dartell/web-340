/*
============================================
; Title:  Assignment 3.2- Logging
; Author: Darius Dinkins
; Date:   11 May 2020
; Modified By: Darius Dinkins
; Description: Logging with Morgan (npm install express ejs morgan --save)
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine","ejs"); // tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/",function(request, response) {

    response.render("index", {  //renders index page
        message: "The Morgan Logging example... not the TV show!"  //message from the render request
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");

});
