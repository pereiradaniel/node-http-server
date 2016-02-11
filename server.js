var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("This text should appear in your browser.");
	response.end();
}).listen(3000);