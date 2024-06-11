import { createServer } from "http";
import { routes } from "./routes.js";

const server = createServer((req, res) => {
  const { url, method } = req;
  const route = routes.find((r) => r.method === method && r.path === url);
  if (!route) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }

  route.handler(req, res);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor rodando em <http://127.0.0.1:3000/>");
});
