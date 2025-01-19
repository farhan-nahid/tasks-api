import { createRoute } from "@hono/zod-openapi";

import { httpStatusCodes } from "@/constants";
import { taskInsertSchema, taskSelectSchema } from "@/db/schema";
import { jsonContent, jsonContentRequired } from "@/openapi/helpers";

const tags = ["Tasks"];

export const list = createRoute({
  tags,
  method: "get",
  path: "/task",
  summary: "List tasks",
  description: "List all tasks",
  responses: {
    [httpStatusCodes.OK]: jsonContent(taskSelectSchema, "List of tasks"),
  },
});

export const create = createRoute({
  tags,
  method: "post",
  path: "/task",
  summary: "List tasks",
  description: "List all tasks",
  request: {
    body: jsonContentRequired(taskInsertSchema, "Task to create"),
  },
  responses: {
    [httpStatusCodes.OK]: jsonContent(taskSelectSchema, "List of tasks"),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
