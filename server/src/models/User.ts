import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  register_date: Date;
}

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

export const User = model<IUser>('User', UserSchema);
