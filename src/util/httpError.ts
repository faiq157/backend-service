import { NextFunction, Request } from "express";
import errorObject from "./errorObject";

export default (
  nextFunc: NextFunction,
  err: Error | unknown,
  req: Request,
  errorstatusCode: number = 500
): void => {
  const errorobj = errorObject(err, req, errorstatusCode);
  return nextFunc(errorobj);
};
