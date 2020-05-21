
// require statements
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

//setting up applications

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

//routes
app.get("/", function(request, response){
    
    response.render("index", {

        message:"Pug is what Pug does!"

    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");

});

