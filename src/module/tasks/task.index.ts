import { createRouter } from "@/lib/create-app";

import * as handlers from "./task.handler";
import * as routes from "./task.route";

const router = createRouter().openapi (routes.list, handlers.list);

export default router;
