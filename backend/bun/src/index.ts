import { Elysia } from "elysia";
import { html } from '@elysiajs/html'

const app = new Elysia()
.use(html())
.get("/", () => "Hello from bun and Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
