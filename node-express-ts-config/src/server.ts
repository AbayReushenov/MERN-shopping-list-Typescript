import express from 'express';
import dotenv from 'dotenv';
import { routerMain } from './routes/main';
import { resLocalsHello as hello } from './middleware/resLocalsHello';
import { readResLocalsHello as readHello } from './middleware/readResLocalsHello';
import { logger } from './middleware/logger';
import { time } from './middleware/time';
import morgan from 'morgan';
import {connectDB}  from './connectDB/db';

// загрузка переменных env
dotenv.config({ path: './config/config.env' });

//  mongo
connectDB();

export const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // GET /api/ver1/main 200 13.078 ms - 207
  app.use('/', hello);
  app.use('/', readHello);
  app.use(logger);
  app.use(time);
  /**
   *  Привет! Я мидлвар
   * Middleware работает
   * GET http://localhost:5000/
   * Time: 3 апреля 2022 г., 08:31:58
   * GET / 404 2.870 ms - 139
   */
}

app.use('/api/ver1/main', routerMain);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Сервер работает на процессе ${process.env.NODE_ENV} на порту ${PORT}`
  );
});
