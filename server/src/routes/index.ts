import { Router } from 'express';
import { routerTodos } from './todos';
import { routerUsers } from './users';
import { routerAuth } from './auth';

export const apiRouter = Router()

apiRouter.use("/auth", routerAuth)
apiRouter.use("/users", routerUsers)
apiRouter.use("/data", routerTodos)
