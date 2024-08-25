import { Request, Response } from "express";
import config from "../config/config";
import { EApplicationEnvirement } from "../constant/application";

export default (
  req: Request,
  res: Response,
  responseStatusCode: number,
  responseMessage: string,
  data: unknown = null
) => {
  const responseTHttpResponse = {
    success: true,
    statusCode: responseStatusCode,
    request: {
      ip: req.ip,
      method: req.method,
      url: req.originalUrl,
    },
    message: responseMessage,
    data: data,
  };
  console.info(`CONTROLLER_RESPONSE`, { meta: responseTHttpResponse });
  if (config.ENV === EApplicationEnvirement.PRODUCTION) {
    delete responseTHttpResponse.request.ip;
  }
  res.status(responseStatusCode).json(responseTHttpResponse);
};
