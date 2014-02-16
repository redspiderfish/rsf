/*
var http = require("http");
http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();
}).listen(8888);
*/
var server = require('http').createServer();
var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log('Listening on ' + port);
});
