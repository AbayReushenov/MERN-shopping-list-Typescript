import { Router } from 'express';
import { getUser } from '../../controllers/users/getUser';
import { authUser } from '../../controllers/users/authUser';
import { authentication } from '../../middleware/auth';

export const routerAuth = Router()


/**
 * @route  POST api/auth
 * @desc   Authentication user
 * @access Public
 **/ 

routerAuth.post('/', authUser)


/**
 * @route  GET api/auth
 * @desc   Get user data
 * @access Privat
 **/ 
routerAuth.get("/user", authentication,  getUser)


