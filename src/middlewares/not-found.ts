import type { NotFoundHandler } from "hono";

import { httpStatusCodes, httpStatusPhrases } from "@/constants";

export const notFound: NotFoundHandler = (c) => {
  return c.json(
    { message: `${httpStatusPhrases.NOT_FOUND} - ${c.req.path}` },
    httpStatusCodes.NOT_FOUND,
  );
};
