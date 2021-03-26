var http = require('http');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('My name is Ahsaan Khatri');
})
.listen(8080, ()=>{
    console.log("The server is running on port 8080");
})