import type { IncomingHttpHeaders, IncomingMessage } from "node:http";

export class HttpRequest {
  constructor(private readonly request: IncomingMessage) {}

  get method(): string {
    return this.request.method ?? "GET";
  }

  get url(): string {
    return this.request.url ?? "/";
  }

  get pathname(): string {
    const url = new URL(this.url, "http://localhost");

    return url.pathname;
  }

  get query(): URLSearchParams {
    const url = new URL(this.url, "http://localhost");

    return url.searchParams;
  }

  get headers(): IncomingHttpHeaders {
    return this.request.headers;
  }
}
