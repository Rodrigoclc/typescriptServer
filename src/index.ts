import type { IncomingMessage, ServerResponse } from "node:http";
import { HttpServer } from "./http/HttpServer.js";

const app = new HttpServer(async (request: IncomingMessage, response: ServerResponse) => {
  response.statusCode = 200;

  response.setHeader("Content-type", "application/json");
  response.end(
    JSON.stringify({
      message: "Hello World",
    }),
  );
});

app.listen(3000);
