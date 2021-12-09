const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
    if (req.url == "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write('Welcome to about us page');
        res.end();
    } else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write('Welcome to contact us page');
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write('Hello World')
        res.end()
    }
})

server.listen(port)
console.log('Server is running on port', port)