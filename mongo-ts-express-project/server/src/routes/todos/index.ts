import { Router } from 'express';
import { todosRouter } from './todosRouter';

export const routerTodos= Router()

routerTodos.use("/", todosRouter)
