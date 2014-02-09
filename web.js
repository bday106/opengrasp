var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express.createServer(express.logger());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(request, response) {
  var hw = fs.readFileSync('public/index.html');
  response.send(hw.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
