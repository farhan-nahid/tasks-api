import { createRoute } from "@hono/zod-openapi";

import { httpStatusCodes } from "@/constants";
import { jsonContent } from "@/openapi/helpers";

import { GetTaskSchema } from "./task.schema";

const tags = ["Tasks"];

export const list = createRoute({
  tags,
  method: "get",
  path: "/tasks",
  summary: "List tasks",
  description: "List all tasks",
  responses: {
    [httpStatusCodes.OK]: jsonContent(GetTaskSchema, "List of tasks"),
  },
});

export type ListRoute = typeof list;
