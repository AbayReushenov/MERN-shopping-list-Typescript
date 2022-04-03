import { Request, Response, NextFunction } from 'express';

// @desc
// @route
// @access

export const readResLocalsHello = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(res.locals.hello);
  next();
};
