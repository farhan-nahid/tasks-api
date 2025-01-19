import { OpenAPIHono } from "@hono/zod-openapi";

import { notFound, onError, pinoLogger, serveEmojiFavicon } from "@/middlewares";
import { defaultHook } from "@/openapi";

import type { AppBuildings } from "./types";

function createRouter() {
  return new OpenAPIHono<AppBuildings>({ strict: false, defaultHook });
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
