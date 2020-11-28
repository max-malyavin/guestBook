const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(function (_, __, next) {
  setTimeout(next, 1000);
});
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, _, next) => {
  const now = new Date();
  if (req.method === "POST") {
    req.body.submitted = `${now.toLocaleDateString()}`;
  }
  next();
});

server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running");
});
