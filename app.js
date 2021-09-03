const http = require('http');

const ip = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from servers!!!');
});

server.listen(port, ip, () => console.log('Server running...'));
