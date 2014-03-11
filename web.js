var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express.createServer();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  var hw = fs.readFileSync('public/index.html');
  response.send(hw.toString());
});
app.get('/demo', function(request, response) {
  var hw = fs.readFileSync('public/demo/topics.html');
  response.send(hw.toString());
});
app.get('/demo/tutorials', function(request, response) {
  var hw = fs.readFileSync('public/demo/tutorial_list.html');
  response.send(hw.toString());
});
app.get('/demo/tutorials/1', function(request, response) {
  var hw = fs.readFileSync('public/demo/tut1.html');
  response.send(hw.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
