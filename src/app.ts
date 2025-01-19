import { configureOpenApi } from "./lib/configure-open-api";
import { createApp } from "./lib/create-app";

const app = createApp();
configureOpenApi(app);

export { app };
