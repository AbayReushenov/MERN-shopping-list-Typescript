import { Request, Response, NextFunction } from 'express';

// @desc Создать элемент в Main
// @route POST /api/ver1/main
// @access Private

export const createMainOne = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ success: true, msg: 'Создаю новые данные' });
};
