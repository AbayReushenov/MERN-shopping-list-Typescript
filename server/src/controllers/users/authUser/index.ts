import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../../models/User';

export const authUser: RequestHandler = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Пожалуйста, заполните все поля.' });
  }

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: 'Такого пользователя нет' });
    }

    bcrypt.compare(password, user.password).then((isOk) => {
      if (!isOk)
        return res.status(400).json({ msg: 'Вы ввели неверный пароль' });
      // isOk === true
      // создаем токен
      jwt.sign(
        { id: user._id },
        `${process.env.JWT_SECRET}`,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res.json({
            token: token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
};
