var http = require('http');

http.createServer(function(req,res) {
    res.write(200,{'Content-Type':'text/plain'});
    res.end('Hello\n');

}).listen(8000);



console.log('server is running');