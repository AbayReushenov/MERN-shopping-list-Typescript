import mongoose from 'mongoose';

interface ITodo extends mongoose.Document {
  name: string; 
  date: Date; 
};


const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Todo = mongoose.model<ITodo>('Todo', TodoSchema);
