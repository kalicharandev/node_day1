let http = require ("http");

http.createServer(function (request, response){
    console.log("This is my server")
response.writeHead(200, {"Content-Type": "text/json"})
   let jsonContent = {
    "name" : "Node Js",
    "date": "Nov 29"
   }
   response.end(JSON.stringify(jsonContent));
}).listen(2000);

