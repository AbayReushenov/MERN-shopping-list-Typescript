import { Router, Request, Response } from 'express';

export const routerTodo = Router();

routerTodo.get('/', [], (req: Request, res: Response) => {
  return res.send('the todo');
});

routerTodo.post('/', [], (req: Request, res: Response) => {
  // const todo = new Todo({title: 'new title', description: 'some description'})
  return res.send('new todo created');
});
