import { Request } from "express";
import responseMessage from "../constant/responseMessage";
import { THttperror } from "../types/types";
import config from "../config/config";
import { EApplicationEnvirement } from "../constant/application";

export default (
  err: Error | unknown,
  req: Request,
  errorstatusCode: number = 500
): THttperror => {
  const errorobj: THttperror = {
    success: false,
    statusCode: errorstatusCode,
    request: {
      ip: req.ip || null,
      method: req.method,
      url: req.originalUrl,
    },
    message:
      err instanceof Error
        ? err.message || responseMessage.SOMETHING_WENT_WRONG
        : responseMessage.SOMETHING_WENT_WRONG,
    data: null,
    trace: err instanceof Error ? { errpr: err.stack } : null,
  };
  if (config.ENV === EApplicationEnvirement.PRODUCTION) {
    delete errorobj.request.ip;
    delete errorobj.trace;
  }
  return errorobj;
};
