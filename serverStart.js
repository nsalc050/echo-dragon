var http = require('http');
var Person = JSON(JSON.stringify);
 var server = http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('hello');
    res.write(Person);
    res.end();

});

server.listen(8000);



console.log('server is running');