import { Request, Response, NextFunction } from 'express';

// @desc Получить все данные
// @route GET /api/ver1/main
// @access Public

export const getMain = (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .json({
      success: true,
      msg: 'Даю данные',
      hello: res.locals.hello,
      helloWorld: res.locals.helloWorld,
      reqHelloBody: req.hellobody
    });
};
