import { Request, Response, NextFunction } from 'express';

// @desc 
// @route 
// @access 

export const hello = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.hello = 'Привет! Я мидлвар' ;
  next()
};
