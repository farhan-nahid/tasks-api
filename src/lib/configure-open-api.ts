import type { AppOpenAPI } from "./types";

import PackageJSON from "../../package.json";

export function configureOpenApi(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: PackageJSON.version,
      title: "Tasks API",
    },
  });
}
