import express from 'express';
import path from 'path';

import { app } from '../server';

/**
 * подключаем в  STATIC  папку BUILD
 **/
export function productionStaticBuild() {
  app.use(express.static('client/build'));
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  })
}
