var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {

  var myFile = 'index.html';
  var buf = new Buffer(256); 

  fs.readFileSync(myFile, function(error, data) {
    if(error) {
	throw error;
    }
  myData=buf.toString(data);
  });
  response.send(myData);
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
