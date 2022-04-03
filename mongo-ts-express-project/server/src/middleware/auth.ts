import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'Токена нет, авторизация отклонена' });
  }
  const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
  try {
    // req.user= decoded;
    next();
  } catch {
    (error: any) => {
      return res.status(400).json({ msg: 'Токен не верен' });
    };
  }
};
