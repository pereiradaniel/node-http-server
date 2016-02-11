var http = require("http");

function serverRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("This text should appear in your browser.");
	response.end();
}

http.createServer(onRequest).listen(3000);