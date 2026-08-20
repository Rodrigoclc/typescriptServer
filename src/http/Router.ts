import type { HttpRequest } from "./HttpRequest.js";
import type { HttpResponse } from "./HttpResponse.js";
import type { RequestHandler } from "./HttpServer.js";

type HttpMethod =
  "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

interface Route {
  method: HttpMethod;
  path: string;
  handler: RequestHandler;
}

export class Router {
  private readonly routes: Route[] = [];

  private add(method: HttpMethod, path: string, handler: RequestHandler): void {
    this.routes.push({
      method,
      path,
      handler,
    });
  }

  get(path: string, handler: RequestHandler): void {
    console.log("bateu aqui");
    this.add("GET", path, handler);
  }

  post(path: string, handler: RequestHandler): void {
    this.add("POST", path, handler);
  }

  put(path: string, handler: RequestHandler): void {
    this.add("PUT", path, handler);
  }

  patch(path: string, handler: RequestHandler): void {
    this.add("PATCH", path, handler);
  }

  delete(path: string, handler: RequestHandler): void {
    this.add("DELETE", path, handler);
  }

  head(path: string, handler: RequestHandler): void {
    this.add("HEAD", path, handler);
  }

  options(path: string, handler: RequestHandler): void {
    this.add("OPTIONS", path, handler);
  }

  async handle(request: HttpRequest, response: HttpResponse): Promise<void> {
    const route = this.routes.find(
      (route) =>
        route.path === request.pathname && route.method === request.method,
    );

    if (!route) {
      response.status(404).json({ error: "Route not found" });

      return;
    }

    await route.handler(request, response);
  }
}
