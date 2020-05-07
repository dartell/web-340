/*
============================================
; Title:  Assignment 2.4- EJS
; Author: Darius Dinkins
; Date:   6 May 2020
; Modified By: Darius Dinkins
; Description: EJS example 
;===========================================
*/

var http = require("http");

var express = require("express");;

var path = require("path");

var app = express();

app.set("views",path.resolve(__dirname,"views")); //Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(request,response){

    response.render("index",{

        firstName: "Tyler",
        lastName: "Durden",
        address: "1999 Mayhem Drive"

    });
});

http.createServer(app).listen(8080, function() {  //creates the server from the variable "app"

    console.log("EJS-Views app started on port 8080.");
});


