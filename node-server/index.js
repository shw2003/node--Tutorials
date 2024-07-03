const http = require("node:http");

const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "bruce",
    lastName: "wayne",
  };

  const name = "shweta karan";
  res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end(JSON.stringify(superHero));
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);
});

server.listen(3000, () => {
  console.log("server running on port  3000");
});
