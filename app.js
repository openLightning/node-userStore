var express = require('express');
var storage = require('node-persist');
var app = express();

app.post('/set/', function(req, res){
  storage.setItem(req.param('name'),req.param('data'));
  res.send('Done');
});
app.post('/get/', function(req, res){
  res.send(storage.getItem(req.param('name')));
});

app.listen(3000);
