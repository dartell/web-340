
//require and Using the Model
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require("mongoose");
var helmet = require("helmet");
var csrf = require("csurf");

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

//setup csrf protection

var csrfProtection = csrf({cookie: true});

//use statements

//app.use(logger("test"));


var app = express();
app.use(logger('dev'));
app.use(helmet.xssFilter()); //protects against Cross side scripting
app.use(bodyParser.urlencoded({
    extended: true

}));
app.use(cookieParser());
app.use(csrfProtection);

app.use(function(request, response, next){
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();

});



//set statements

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//routing
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page",
        message: "XSS Prevention Example",
        message: "New Entry Page"

    });
});

app.post("/process", function(request, response) {
    console.log(request.body.txtName);
    response.redirect("/");

});



//create and start the Node Server

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
    
})