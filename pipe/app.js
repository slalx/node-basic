var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res)=>{

    var myReadStream = fs.createReadStream(__dirname+"/readMy.txt","utf8");

    res.writeHead(200,{"Content-Type":"text/plain"});


    myReadStream.pipe(res);

});

server.listen(3001);
console.log("server listening 3001");