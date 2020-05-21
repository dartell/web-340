// requires
var express = require("express");
var http = require("http");
var path = require ("path");

// app functions
var app = express();

//remember, instructs express to look in views folder
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// data array
var f = [
    "Bob",
    "Zusan",
    "Ralph",
    "Melca"

];

//(routes) when the app is called render the array "f" under the names variable on the index page
app.get("/", function(request, response) {
    response.render("index", {
        names: f  //can check logic by making "names" an empty array

    });
});

//create server with console.log message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});