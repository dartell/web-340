/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified by: Darius Dinkins 
; Date Modified by: May 20 2020
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

var express = require("express");
var http = require("http");
var logger = require("morgan");

var app = express();

app.set(logger("short"));

app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});