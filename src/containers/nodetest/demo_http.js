var http = require('http')
console.log('http====>',http)

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('Hello World! this sis Neeraj');
    res.end()
}).listen(8010)