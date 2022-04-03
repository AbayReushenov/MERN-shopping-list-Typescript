import { Request, Response, NextFunction } from 'express';

// @desc 
// @route 
// @access 

export const resLocalsHelloWrite = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.hello = 'Привет! Я мидлвар! Записал и прочитал тебе  через res.locals.hello' ;
  next()
};
