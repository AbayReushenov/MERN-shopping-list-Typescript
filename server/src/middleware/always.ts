import { Request, Response, NextFunction } from 'express';

// @desc 
// @route 
// @access 

export const always = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("loger оставил сообщение, что req.hellobody = ",  req.hellobody)
  console.log("loger оставил сообщение, что res.locals.helloWorld = ",  res.locals.helloWorld)
  next()
};
