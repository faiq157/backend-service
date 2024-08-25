import { NextFunction, Request, Response } from "express";
import { THttperror } from "../types/types";

export default (
  err: THttperror,
  _req: Request,
  res: Response,
  _: NextFunction
) => {
  res.status(err.statusCode).json(err);
};
