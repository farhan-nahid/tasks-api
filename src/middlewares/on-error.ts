import type { ErrorHandler } from "hono";
import type { ContentfulStatusCode, StatusCode } from "hono/utils/http-status";

import { httpStatusCodes } from "@/constants";

export const onError: ErrorHandler = (err, c) => {
  const currentStatus
    = "status" in err ? err.status : c.newResponse(null).status;
  const statusCode
    = currentStatus !== httpStatusCodes.OK
      ? (currentStatus as StatusCode)
      : httpStatusCodes.INTERNAL_SERVER_ERROR;

  // eslint-disable-next-line node/no-process-env
  const env = c.env?.NODE_ENV || process.env?.NODE_ENV;
  return c.json(
    {
      message: err.message,
      stack: env === "production" ? undefined : err.stack,
    },
    statusCode as ContentfulStatusCode,
  );
};
