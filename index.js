const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("</html>");
  const url = req.url;
  if (url === "/home") {
    return res.write("<body><h1>Welcome home</h1></body>");
  } else if (url === "/about") {
    return res.write("<body><h1>Welcome to About Us page</h1></body>");
  } else if (url === "/node") {
    return res.write("<body><h1>Welcome to my Node Js project</h1></body>");
  }
  res.end();
});

server.listen(4000);
