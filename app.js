var express = require('express');
var storage = require('node-persist');
var app = express();

/* Start User Functions */
function existingUser(username){
  if(storage.getItem(username)!=undefined){
		return true;
	} else{
		return false;
	}
}
       
function newUser(username, password){
	var user = {
		name:username,
		pass:password,
		data:{
			
		}
	}
}

/* End User Functions*/
app.post('/set/', function (req, res){
  storage.setItem(req.param('name'),req.param('data'));
  res.send('Done');
});
app.post('/get/', function (req, res){
  res.send(storage.getItem(req.param('name')));
});

app.listen(3000);
