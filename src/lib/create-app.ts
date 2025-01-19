import { notFound, onError, pinoLogger, serveEmojiFavicon } from "@/middlewares";
import { OpenAPIHono } from "@hono/zod-openapi";

import type { AppBuildings } from "./types";

export function createApp() {
  const app = new OpenAPIHono<AppBuildings>({ strict: false });
  app.use(serveEmojiFavicon("📝"));
  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
