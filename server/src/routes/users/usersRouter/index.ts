import { Router } from 'express';
import { controllerUser } from '../../../controllers/users/controllerUser';

export const usersRouter = Router()

/**
 * @route  POST api/users
 * @desc   Register new user
 * @access Public
 **/
 usersRouter.post('/', controllerUser)
