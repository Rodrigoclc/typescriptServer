import http, { type IncomingMessage, type ServerResponse } from "node:http";

type RequestHandler = (
  request: IncomingMessage,
  response: ServerResponse,
) => void | Promise<void>;

export class HttpServer {
  private readonly server: http.Server;

  constructor(handler: RequestHandler) {
    this.server = http.createServer(async (request, response) => {
      try {
        await handler(request, response);
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
