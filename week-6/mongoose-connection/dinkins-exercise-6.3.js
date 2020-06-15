var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require("mongoose");


var mongoDB = "mongodb+srv://dartell:j3X4EnC7cZqNqlJ4@buwebdev-cluster-1-dy3io.mongodb.net/test";

mongoose.connect(mongoDB, {
    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error:"));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");

});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function () {

    console.log('Application started and listening on port 5000')
})