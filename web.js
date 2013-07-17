var express = require('express'),
	fs = require('fs'),
	path = require('path');

var app = express.createServer();

var WORKING_DIR = './public/';

app.use(express.logger('dev'));
app.use(express.favicon(WORKING_DIR + '/favicon.ico'));
app.use(express.static(path.join(WORKING_DIR)));


var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});