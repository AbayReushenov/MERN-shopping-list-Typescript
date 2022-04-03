import { RequestHandler } from 'express';
import { User } from '../../../models/User';

export const getUser: RequestHandler = async (req, res, next) => {
  if (req.user) {
    User.findById(req.user.id)
      .select('-password')
      .then((user) => res.json(user));
  }
  next();
};
