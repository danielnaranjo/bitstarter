var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {

  var myfile = 'index.html';
  var mybuffer = new buffer(256); 
  var mydata;

  fs.readFileSync(myfile, function(error, data) {
    if(error) {
	throw error;
    }
  mydata=data;
  });
  response.send(mydata);
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
