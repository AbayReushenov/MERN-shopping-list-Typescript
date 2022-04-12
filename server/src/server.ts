import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

import { apiRouter } from './routes';
import { connectDB } from './connectDB/db';
import { devLoggingTools } from './server.dev.ts';
import { productionStaticBuild } from './server.build.ts';

dotenv.config({ path: './config/config.env' });
connectDB();

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
  return;
});

if (process.env.NODE_ENV === 'development') {
  devLoggingTools();
} else if (process.env.NODE_ENV === 'production') {
  productionStaticBuild();
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Сервер работает на процессе ${process.env.NODE_ENV} на порту ${PORT}`
  );
});
