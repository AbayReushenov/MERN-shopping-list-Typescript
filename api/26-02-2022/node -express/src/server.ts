import express from 'express';
import dotenv from 'dotenv';
import { routerMain } from './routes/main';
import { hello } from './middleware/hello';
import { logger } from './middleware/logger';
import { time } from './middleware/time';

// загрузка переменных env
dotenv.config({ path: './config/config.env' });

export const app = express();

app.use('/', hello);
app.use(logger);
app.use(time);
app.use('/api/ver1/main', routerMain);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Сервер работает на процессе ${process.env.NODE_ENV} на порту ${PORT}`
  );
});
