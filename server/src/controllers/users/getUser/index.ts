import { RequestHandler } from 'express';
import { User } from '../../../models/User';

export const getUser: RequestHandler = async (req, res, next) => {
  User.findById(3)  // req.user.id
  .select('-password')
  .then((user) => res.json(user));
};
