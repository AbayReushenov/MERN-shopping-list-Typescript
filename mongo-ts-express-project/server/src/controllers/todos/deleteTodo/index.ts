import { RequestHandler } from 'express';
import { Todo } from '../../../models/Todo';

export const deleteTodo: RequestHandler = (req, res, next) => {
  const id = Number(req.params.id);
  Todo.deleteOne({ _id: id })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
};
