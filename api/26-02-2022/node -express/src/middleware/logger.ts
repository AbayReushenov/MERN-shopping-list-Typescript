import { Request, Response, NextFunction } from 'express';


// @desc 
// @route 
// @access 

export const logger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.hellobody = "Привет из мидлвар! Это переменная req.hellobody"
  res.locals.helloWorld = 'Hello World!' ;
  console.log("Middleware работает")
  next()
};
