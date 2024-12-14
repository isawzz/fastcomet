// Import the HTTP module
const http = require('http');

// Create a server that sends "Hello World" as a response
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World was soll das alles\n');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
