let http = require('http');
let url= require('url');

let start= function(route){

function onRequest(request, response){
  let pathname = url.parse(request.url).pathname
  console.log("Request for " + pathname + " has been received.")
  route(pathname);
 
 
  response.writeHead(200, {"content-type": "text/plain"});
  response.write("Hello World!");
  response.end();

}
http.createServer(onRequest).listen(8000);

console.log("Server has started.")
}

exports.start= start;
