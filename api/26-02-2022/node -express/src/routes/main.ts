import express from 'express';

import { deleteMainOne } from "../controllers/deleteMainOne";
import { updateMainOne } from "../controllers/updateMainOne";
import { createMainOne } from "../controllers/createMainOne";
import { getMainOne } from "../controllers/getMainOne";
import { getMain } from "../controllers/getMain";

export const routerMain = express.Router();

routerMain.route('/').get(getMain).post(createMainOne);

routerMain
  .route('/:id')
  .get(getMainOne)
  .put(updateMainOne)
  .delete(deleteMainOne);
