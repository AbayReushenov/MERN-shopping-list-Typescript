import { Request, Response, NextFunction } from 'express';

// @desc Получить данные по id
// @route GET /api/ver1/main/:id
// @access Public

export const getMainOne = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(200)
    .json({ success: true, mag: `Даю данные  по id: ${req.params.id}` });
};
