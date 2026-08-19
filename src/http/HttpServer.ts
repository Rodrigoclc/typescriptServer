import http from "node:http";
import { HttpRequest } from "./HttpRequest.js";
import { HttpResponse } from "./HttpResponse.js";

export type RequestHandler = (
  request: HttpRequest,
  response: HttpResponse,
) => void | Promise<void>;

export class HttpServer {
  private readonly server: http.Server;

  constructor(handler: RequestHandler) {
    this.server = http.createServer(async (request, response) => {
      try {
        const httpRequest = new HttpRequest(request);
        const httpResponse = new HttpResponse(response);
        await handler(httpRequest, httpResponse);
      } catch (error) {
        console.log(error);

        response.statusCode = 500;
        response.setHeader("Content-type", "application/json");

        response.end(
          JSON.stringify({
            error: "Internal Server Error",
          }),
        );
      }
    });
  }

  listen(port: number): void {
    this.server.listen(port, () => {
      console.log(`Sever running on http://localhost:${port}`);
    });
  }
}
