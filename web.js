var express = require('express'),
	fs = require('fs'),
	path = require('path');

var app = express.createServer(express.logger('dev')),
	filename = './public/index.html';
	
app.use(express.static(path.join('./public')));


app.get('/', function(request, response) {
	fs.readFile(filename, function (err, html) {
		if(err)
		{	response.setHeader("Content-Type", "text/plain");
			response.write("404 Not found\n");
			response.end("There is some error, that's all we know");
		}
		else{
			response.setHeader("Content-Type", "text/html");
			response.setHeader("Content-Length", html.length);
			response.write(html);
		}
	});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});