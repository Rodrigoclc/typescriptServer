import { HttpServer } from "./http/HttpServer.js";
import { Router } from "./http/Router.js";

const router = new Router();

router.get("/health", async (_, response) => {
  response.status(200).json({ status: "ok" });
  return;
});

const server = new HttpServer(router.handle.bind(router));

server.listen(3003);
