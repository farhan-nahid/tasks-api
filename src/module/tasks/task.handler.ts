import type { AppRouteHandler } from "@/lib/types";

import db from "@/db";
import { tasks } from "@/db/schema";

import { eq } from "drizzle-orm";
import type { CreateRoute, DeleteRoute, ListRoute, UpdateRoute } from "./task.route";
// import type { Task } from "./task.schema";

export const list: AppRouteHandler<ListRoute> = async (ctx) => {
  const tasks = await db.query.tasks.findMany();

  return ctx.json(tasks);
};

export const create: AppRouteHandler<CreateRoute> = async (ctx) => {
  const task = ctx.req.valid("json");
  const [newTask] = await db.insert(tasks).values(task).returning();
  return ctx.json(newTask);
};

export const update: AppRouteHandler<UpdateRoute> = async (ctx) => {
  const task = ctx.req.valid("json");
  const taskId = parseInt(ctx.req.param("id"));
  
  const [updatedTask] = await db
    .update(tasks)
    .set(task)
    .where(eq(tasks.id, taskId)) // Add non-null assertion since task.id is required for update
    .returning();
  return ctx.json(updatedTask);
};

export const deleted: AppRouteHandler<DeleteRoute> = async (ctx) => {
  const taskId = parseInt(ctx.req.param("id"), 10);
  const deletedTask = await db.delete(tasks).where(eq(tasks.id, taskId));
  return ctx.json(deletedTask.toJSON());
};
