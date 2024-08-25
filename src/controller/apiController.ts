import { NextFunction, Request, Response } from "express";
import httpResponse from "../util/httpResponse";
import responseMessage from "../constant/responseMessage";
import httpError from "../util/httpError";

export default {
  self: (req: Request, res: Response, nextFunc: NextFunction) => {
    try {
      httpResponse(req, res, 200, responseMessage.SUCCSESS);
    } catch (error) {
      httpError(nextFunc, error, req);
    }
  },
};
