var http = require('http');
/*
var text =localStorage.getItem("testJSON");
var Person = JSON.parse(text); 
console.log(Person.name); */
 var server = http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('hello');
    //res.write(Person.name);
    res.end();

});

server.listen(8000);



console.log('server is running');