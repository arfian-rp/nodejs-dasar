//https://nodejs.org/dist/latest-v16.x/docs/api/http.html
//https://nodejs.org/dist/latest-v16.x/docs/api/https.html

import http from "http";

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    req.on("data", (data) => {
      res.setHeader("Content-Type", "application/json");
      res.write(data);
      res.end();
    });
  } else {
    res.write("Hello World");
    res.end();
  }
  console.info(req.method);
  console.info(req.url);
  console.info(req.header);
});

server.listen("3000");
