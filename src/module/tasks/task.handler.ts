import type { AppRouteHandler } from "@/lib/types";

import type { ListRoute } from "./task.route";

export const list: AppRouteHandler<ListRoute> = (ctx) => {
  return ctx.json({
    success: true,
    data: [
      {
        id: "1",
        title: "Task 1",
        description: "Description of task 1",
        done: false,
      },
      {
        id: "2",
        title: "Task 2",
        description: "Description of task 2",
        done: true,
      },
    ],
  });
};
