const http = require('http');

const routes = {
'GET': {
    '/':(req, res)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1><center>My name is Ahsaan Khatri<center><h1>');
    }
}, 
'POST': {}, 
}

const router = (req, res) => {
    console.log('Request Method :>>', req.method);
    console.log('Request URL :>>', req.url);
    res.end();
}

http.createServer(router)
.listen(3000, ()=>{
    console.log("Server is on port 3000");
});