import { RequestHandler } from 'express';
import { User } from '../../../models/User';

export const getUser: RequestHandler = async(req, res) => {
  if (req.user) {
    await User.findById(req.user.id)
      .select('-password')
      .then((user) => {
        if (!user) {
          return res.status(400).json({ msg: 'Такого пользователя нет' });
        }
        return res.json({
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        });
      });
  }
};
