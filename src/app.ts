import { configureOpenApi } from "./lib/configure-open-api";
import { createApp } from "./lib/create-app";
import index from "./module/index.route";

const app = createApp();
configureOpenApi(app);

const routes = [index] as const;

routes.forEach(route => app.route("/", route));

export type AppType = typeof routes[number];

export { app };
