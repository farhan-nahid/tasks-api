import type { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";
import type { PinoLogger } from "hono-pino";

interface AppBuildings {
  Variables: {
    logger: PinoLogger;
  };
}

type AppOpenAPI = OpenAPIHono<AppBuildings>;
type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBuildings>;

export type { AppBuildings, AppOpenAPI, AppRouteHandler };

