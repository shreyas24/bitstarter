var express = require('express'),
	fs = require('fs');

var app = express.createServer(express.logger())
	filename = 'index.html';
	

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

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});