var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {

  var myFile = 'index.html';
  var myBuffer = new Buffer(256); 
  var myData;

  fs.readFileSync(myFile, function(error, data) {
    if(error) {
	throw error;
    }
  //myData=data;
  myBuffer = myBuffer.write(myData,256);
  });
  response.send(myBuffer.toString("utf-8"));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
