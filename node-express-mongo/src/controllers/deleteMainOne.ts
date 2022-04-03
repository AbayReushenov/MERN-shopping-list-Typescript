import { Request, Response, NextFunction } from 'express';

// @desc Удалить элемент в Main
// @route DELETE /api/ver1/main/:id
// @access Private

export const deleteMainOne = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ success: true, msg: `Удаляю данные по id: ${req.params.id}` });
};
