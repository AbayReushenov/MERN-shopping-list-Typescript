import { Request, Response, NextFunction } from 'express';
import { formatDate } from '../helpers/formatDate';

// interface RequestHello extends Request {
//   hello: string;
// }

// @desc
// @route
//

export const time = (req: Request, res: Response, next: NextFunction): void => {
  console.log('Time:', formatDate(new Date(Date.now())));
  next();
};
