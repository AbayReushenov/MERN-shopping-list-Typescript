import { RequestHandler } from 'express';
import { Todo } from '../../../models/Todo';

export const createTodo: RequestHandler = async(req, res, next) => {
  const newTodo = new Todo({
    name: req.body.name,
  });
  await newTodo.save().then((data) => res.json(data));
};
