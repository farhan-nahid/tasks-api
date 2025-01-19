import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

import PackageJSON from "../../package.json";

export function configureOpenApi(app: AppOpenAPI) {
  app.doc("/docs", {
    openapi: "3.0.0",
    info: {
      version: PackageJSON.version,
      title: "Tasks API",
    },
  });

  app.get(
    "/reference",
    apiReference({
      theme: "purple",
      layout: "classic",
      servers: [
        {
          url: "http://localhost:9999",
          description: "Development server",
        },
        {
          url: "http://localhost:9999",
          description: "Production server",
        },
      ],
      spec: {
        url: "/docs",
      },
    }),
  );
}
