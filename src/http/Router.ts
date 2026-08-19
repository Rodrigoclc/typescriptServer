import type { HttpRequest } from "./HttpRequest.js";
import type { HttpResponse } from "./HttpResponse.js";
import type { RequestHandler } from "./HttpServer.js";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface Route {
  method: HttpMethod;
  path: string;
  handler: RequestHandler;
}

export class Router {
  private readonly routes: Route[] = [];

  get(path: string, handler: RequestHandler): void {
    this.routes.push({
      method: "GET",
      path,
      handler,
    });
  }

  post(path: string, handler: RequestHandler): void {
    this.routes.push({
      method: "POST",
      path,
      handler,
    });
  }

  async handle(request: HttpRequest, response: HttpResponse): Promise<void> {}
}
