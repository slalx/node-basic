var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res)=>{

   // var myReadStream = fs.createReadStream(__dirname+"/index.html","utf8");

    res.writeHead(200,{"Content-Type":"application/json"});

    var myobj={
        name:"zhang",
        age:20
    }

    res.end(JSON.stringify(myobj));

    //myReadStream.pipe(res);

});

server.listen(3001);
console.log("server listening 3001");