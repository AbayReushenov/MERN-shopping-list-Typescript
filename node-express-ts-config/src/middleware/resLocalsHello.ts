import { Request, Response, NextFunction } from 'express';

// @desc 
// @route 
// @access 

export const resLocalsHello = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.hello = 'Привет! Я мидлвар' ;
  next()
};
