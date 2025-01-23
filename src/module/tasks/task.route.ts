import { createRoute } from "@hono/zod-openapi";

import { httpStatusCodes } from "@/constants";
import { taskInsertSchema, taskSelectSchema, taskUpdateSchema } from "@/db/schema";
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
    body: jsonContentRequired(taskInsertSchema, "Task to create")
  },
  responses: {
    [httpStatusCodes.OK]: jsonContent(taskSelectSchema, "List of tasks"),
  },
});

export const update = createRoute({
  tags,
  method: "put",
  path: "/task/{id}",
  summary: "Update task",
  description: "Update a task",
  request: {
    body: jsonContentRequired(taskUpdateSchema, "Task to update"),
  },
  responses: {
    [httpStatusCodes.OK]: jsonContent(taskSelectSchema, "Updated task"),
  },
});

export const deleted = createRoute({
  tags,
  method: "delete",
  path: "/task/{id}",
  summary: "Delete task",
  description: "Delete a task",
  responses: {
    [httpStatusCodes.OK]: jsonContent(taskSelectSchema, "Deleted task"),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type UpdateRoute = typeof update;
export type DeleteRoute = typeof deleted;