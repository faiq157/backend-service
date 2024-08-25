import express, { Application, NextFunction, Request, Response } from "express";
import path from "path";
import router from "./router/apirouter";
import globalErrorHandler from "./middleware/globalErrorHandler";
import responseMessage from "./constant/responseMessage";
import httpError from "./util/httpError";

const app: Application = express();
//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../", "public")));

//Routes
app.use("/api/v1", router);

app.use((req: Request, _: Response, next: NextFunction) => {
  try {
    throw new Error(responseMessage.SOMETHING_WENT_WRONG);
  } catch (error) {
    httpError(next, error, req, 404);
  }
});

// global error handler
app.use(globalErrorHandler);

export default app;
