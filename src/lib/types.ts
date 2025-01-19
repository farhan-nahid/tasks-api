import type { PinoLogger } from "hono-pino";

interface AppBuildings {
  Variables: {
    logger: PinoLogger;
  };
}

export type { AppBuildings };
