import { z } from "@hono/zod-openapi";

const GetTaskSchema = z.object({
  success: z.literal(true),
  data: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string().optional(),
      done: z.boolean(),
    }),
  ),
});

export { GetTaskSchema };
