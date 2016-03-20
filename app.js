/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.set('view engine', 'jade');
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
var mysql = require("mysql");
// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = (cfenv.getAppEnv()||3000);

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});


app.get('/',function(req,res){
  res.sendfile('/public/index.html');
});

app.post('/f',function(req,res){
	console.log("going to form-1");
	if(req.body){res.sendStatus(404);}
		else
      console.log(req.body);
  //console.log(req.body.name);
});
app.post('/userlogin', function(sReq, sRes){    
    var email = sReq.body.email;   
    console.log(email);
});