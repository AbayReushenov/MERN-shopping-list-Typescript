import { Request, Response, NextFunction } from 'express';

// @desc 
// @route 
// @access 

export const resLocalsHelloRead = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(res.locals.hello);
  next()
};
