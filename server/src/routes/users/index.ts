import { Router } from 'express';
import { usersRouter } from './usersRouter';

export const routerUsers = Router()

routerUsers.use("/", usersRouter)
