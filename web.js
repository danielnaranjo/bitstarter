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
  myData=data;
  bufLen = buf.write(data,0);
  });
  response.send(myData);
  console.log(bufLen + "bytes: " + buf.toString('utf8',0,bufLen));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
