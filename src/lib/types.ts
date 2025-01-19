import type { OpenAPIHono } from "@hono/zod-openapi";
import type { PinoLogger } from "hono-pino";

interface AppBuildings {
  Variables: {
    logger: PinoLogger;
  };
}

type AppOpenAPI = OpenAPIHono<AppBuildings>;

export type { AppBuildings, AppOpenAPI };
