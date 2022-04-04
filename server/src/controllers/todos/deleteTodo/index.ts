import { RequestHandler } from 'express';
import { Todo } from '../../../models/Todo';

export const deleteTodo: RequestHandler = async (req, res, next) => {
  const id = req.params.id;
  await Todo.deleteOne({ _id: id })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
};
