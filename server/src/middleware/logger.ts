import { Request, Response, NextFunction } from 'express';


// @desc Logs request to console
// console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`)
// GET http://localhost:5000/api/ver1/main

export const logger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.hellobody = "Привет из мидлвар! Это переменная req.hellobody"
  res.locals.helloWorld = 'Hello World!' ;
  console.log("Middleware работает")
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`)
  next()
};
