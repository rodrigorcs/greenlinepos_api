import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import { errors } from "./errors";

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      const { status, message } = errors[error.message];
      return response.status(status).json({
        message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

export { app };
