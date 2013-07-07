var express = require('express');
var app = express.createServer();
var fs = require('fs');

app.get('/', function(request, response) {

  var mydata = fs.readFileSync("index.html","utf-8");
  var mybuffer = new Buffer(mydata); 
  
  response.send(mybuffer.toString());
  console.log('>'= mybuffer.toString());

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
