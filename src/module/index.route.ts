import { createRoute } from "@hono/zod-openapi";

import { httpStatusCodes } from "@/constants";
import { createRouter } from "@/lib/create-app";
import { jsonContent } from "@/openapi/helpers";
import { createMessageObjectSchema } from "@/openapi/schemas";

const router = createRouter().openapi(
  createRoute({
    tags: ["Health"],
    method: "get",
    path: "/health",
    summary: "Health check",
    description: "Check if the server is running",
    responses: {
      [httpStatusCodes.OK]: jsonContent(
        createMessageObjectSchema("Task Api server is running"),
        "Task Api server is running",
      ),
    },
  }),
  (ctx) => {
    return ctx.json({ message: "Task Api server is running" }, httpStatusCodes.OK);
  },
);

export default router;
