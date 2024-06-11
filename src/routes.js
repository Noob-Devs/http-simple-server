export const routes = [
  {
    path: "/",
    method: "GET",
    handler: (req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello World!");
    },
  },
];
