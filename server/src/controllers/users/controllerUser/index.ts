import { RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../../models/User';

export const controllerUser: RequestHandler = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name.trim() || !email.trim() || !password.trim()) {
    return res.status(400).json({ msg: 'Пожалуйста, заполните все поля.' });
  }

  User.findOne({ email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ msg: 'Данный пользователь уже зарегистрирован.' });
    }

    const newUser = new User({
      name,
      email,
      password,
    });
  
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
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
    });
  });
};
