var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  var hw = fs.readFileSync('public/index.html');
  response.send(hw.toString());
});
app.get('/beta', function(request, response) {
  var hw = fs.readFileSync('public/beta/topics.html');
  response.send(hw.toString());
});
app.get('/beta/tutorials', function(request, response) {
  var hw = fs.readFileSync('public/beta/tutorial_list.html');
  response.send(hw.toString());
});
app.get('/beta/tutorials/1', function(request, response) {
  var hw = fs.readFileSync('public/beta/tut1.html');
  response.send(hw.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
