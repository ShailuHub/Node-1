const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Montee");
});

server.listen(4000);
