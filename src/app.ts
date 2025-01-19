import { OpenAPIHono } from "@hono/zod-openapi";

import { notFound, onError } from "./middlewares";

const app = new OpenAPIHono();

app.get("/", c => c.text("Hello Hono!"));

app.notFound(notFound);
app.onError(onError);

export { app };
