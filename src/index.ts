import type { IncomingMessage, ServerResponse } from "node:http";
import { HttpServer } from "./http/HttpServer.js";
import type { HttpResponse } from "./http/HttpResponse.js";
import type { HttpRequest } from "./http/HttpRequest.js"
import {} from "./http/Router.js"
coonst router = new Route
const server = new HttpServer(
  router.handle.bind(router)
)

server.listen(3000)
