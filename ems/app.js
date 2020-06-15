
//require and Using the Model
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");


//path to employee schema
var Employee = require("./models/employee");

module.exports = Employee;

//mongoDB Compass Connection
var mongoDB = "mongodb+srv://dartell:j3X4EnC7cZqNqlJ4@buwebdev-cluster-1-dy3io.mongodb.net/test";

mongoose.connect(mongoDB, {
    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error:"));

db.once("open", function() {
    console.log("Application connected to Compass MongoDB instance");

});

//application
var app = express();
app.use(logger('dev'));

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"

    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
    
})