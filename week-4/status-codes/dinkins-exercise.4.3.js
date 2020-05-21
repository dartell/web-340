var express = require ("express");
var http = require ("http");

var app = express();

app.get("/not-found", function (request, response) {

    response.status(404);
    response.json({
        error:"We didn't find it."

    })
});

app.get("/ok", function (request, response) {

    response.status(200);
    response.json({
        error:"Everything is ok and running."

    })
});

app.get("/not-implemented", function(request, response){
    response.status(501);
    response.json({
        error: "Uh-oh, we can't find it on our end."

    })
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");

});