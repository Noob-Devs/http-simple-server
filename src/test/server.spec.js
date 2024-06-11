const http = require("http");
const assert = require("assert");
const { describe, test } = require("node:test");

describe("Testes do Servidor HTTP", () => {
  test('Deve retornar status 200 e a mensagem "Hello World!"', () => {
    http.get("http://127.0.0.1:3000", (res) => {
      assert.strictEqual(res.statusCode, 200);
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        assert.strictEqual(data, "Hello World!\n");
      });
    });
  });
});
