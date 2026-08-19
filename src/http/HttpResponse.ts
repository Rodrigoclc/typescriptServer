import type { ServerResponse } from "node:http";

export class HttpResponse {
  constructor(private readonly response: ServerResponse) {}

  status(code: number): this {
    this.response.statusCode = code;

    return this;
  }

  header(name: string, value: string): this {
    this.response.setHeader(name, value);

    return this;
  }

  json(data: unknown): void {
    this.response.setHeader("Content-type", "application/json");

    this.response.end(JSON.stringify(data));
  }
  send(data: string): void {
    this.response.end(data);
  }
}
