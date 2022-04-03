import { Router } from 'express';
import { createTodo } from '../../../controllers/todos/createTodo';
import { deleteTodo } from '../../../controllers/todos/deleteTodo';
import { getTodos } from '../../../controllers/todos/getTodos';
import { authentication } from '../../../middleware/auth';

export const todosRouter = Router()

/**
 * @route  GET api/todos
 * @desc   Get All Data
 * @access Public
 **/
todosRouter.get("/", getTodos)

/**
 * @route  POST api/todos
 * @desc   Create a data
 * @access Private
 **/
 todosRouter.post('/', authentication, createTodo)

/**
 * @route  DELETE api/todos/:id
 * @desc   delete a post
 * @access Private
 **/ 
 todosRouter.delete('/:id', authentication, deleteTodo)
