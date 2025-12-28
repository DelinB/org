import { AppError } from "./index"
import { Request, Response, NextFunction } from "express"  // ✅ Add NextFunction

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(`Error ${req.method} ${req.url} - ${err.message}`);
  
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({  // ✅ res.status exists now
      status: "error",
      message: err.message,
      ...(err.details ? { details: err.details } : {}),
    });
  }
  
  console.log("Unhandled Error:", err);
  return res.status(500).json({
    status: "error",
    message: "Something went wrong"
  });
}
