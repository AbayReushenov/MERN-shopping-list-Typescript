import { RequestHandler } from 'express';
import { Todo } from '../../../models/Todo';

export const getTodos: RequestHandler = async (req, res, next) => {
  await Todo.find()
    .sort({ date: -1 })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ msg: err.message }));
};
