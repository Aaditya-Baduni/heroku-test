//jshint esversion:6
const http = require('http');
var port = process.env.PORT || 8080;

// create a server
http.createServer(function(request, response) {
    console.log('bro check 3000');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`
    new2
    `);
    response.end();
}).listen(port);