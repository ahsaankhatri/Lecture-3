const http=require('http');

var dt=require('./firstmodule')


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello World!!\n Today is "+dt.GiveDate());
    res.write("\nMy name is "+dt.PrintMyName())

    res.end("\nKilling the response object here");
})
.listen(8080, ()=>{
    console.log("The server is running on port 8080");
})