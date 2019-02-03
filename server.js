//Hard code array of JSON object
var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
    ];

var express = require('express');//create reference to the exoress module
var app = express();//call express function to create app object
var port = 3000;//port number for server to listen for request. Clients send requests here

//defining route to handle HTTP GET request
app.get('/', function(request, response) {
    response.send("Get request received at '/'");
});

//req.query access query string via express
app.get('/quotes', function(req, res){
    console.log("Get a list of all quotes as json");
    if(req.query.year){//checking if year query string inclueded in request
        res.send("Return a list of quotes from the year: " + req.query.year);
      }
      else{
          res.json(quotes);
      }
});
//GET /quotes/:id route is defined as...
app.get('/quotes/:id', function(req, res){
    console.log("return quote with the ID: " + req.params.id);
    res.send("Return quote with the ID: " + req.params.id);
});
//server listens for requests on port number then runs function
app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});





/*var http = require('http');
var port = 3000;

var requestHandler = function(request, response){
    console.log('Request came from: ' + request.url);
    response.end('Hello, World!');
}

var server = http.createServer(requestHandler);

server.listen(port, function(){
    console.log('Listening on port ' + port);
});*/