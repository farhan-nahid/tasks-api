import { notFound, onError, pinoLogger, serveEmojiFavicon } from "@/middlewares";
import { OpenAPIHono } from "@hono/zod-openapi";

import type { AppBuildings } from "./types";

function createRouter() {
  return new OpenAPIHono<AppBuildings>({ strict: false });
}

function createApp() {
  const app = createRouter();
  app.use(serveEmojiFavicon("📝"));
  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}

export { createApp, createRouter };
