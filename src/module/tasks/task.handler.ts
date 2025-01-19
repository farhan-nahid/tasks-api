import type { AppRouteHandler } from "@/lib/types";

import db from "@/db";
import { tasks } from "@/db/schema";

import type { CreateRoute, ListRoute } from "./task.route";
// import type { Task } from "./task.schema";

export const list: AppRouteHandler<ListRoute> = async (ctx) => {
  const tasks = await db.query.tasks.findMany();

  return ctx.json({ success: true, data: tasks });
};

export const create: AppRouteHandler<CreateRoute> = async (ctx) => {
  const task = ctx.req.valid("json");
  const [newTask] = await db.insert(tasks).values(task).returning();

  return ctx.json({ success: true, data: newTask });
};
