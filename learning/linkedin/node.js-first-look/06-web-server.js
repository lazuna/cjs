// add log to show, every url requested via browser
var http = require('http'); 
http.createServer(function (request, response) { 
    response.writeHead(200, {'Content-Type': 'text/html'}); 
    response.end('<html><body>Home, URL was: ' + request.url + '</body></html>'); 
    // To log the URL 
    console.log(request.url); 
}).listen(3000, 'localhost'); 
console.log('Server running at http://localhost:3000/');
