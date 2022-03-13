import { Request, Response, NextFunction } from 'express';

// @desc Изменить элемент в Main
// @route PUT /api/ver1/main/:id
// @access Private

export const updateMainOne = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ success: true, msg: `Изменяю данные  по id: ${req.params.id}` });
};
