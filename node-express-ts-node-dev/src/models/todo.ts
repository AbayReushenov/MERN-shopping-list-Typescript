import mongoose from 'mongoose';

interface ITodo {
  title: string;
  description: string;
}

interface TodoModelInterface extends mongoose.Model<any> {
  buildMethod(attr: ITodo): any
}
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Todo = mongoose.model<any, TodoModelInterface>('Todo', todoSchema);

const build = (attr: ITodo) => {
  return new Todo(attr);
};

todoSchema.statics.buildMethod = (attr: ITodo)=>{
  return new Todo(attr);
}

Todo.buildMethod({
  title: 'French learning',
  description: '0 hour',
})

build({
  title: 'Job development',
  description: '8 houres',
});

build({
  title: 'English learning',
  description: '1 hour',
});

build({
  title: 'Development learning',
  description: '1 hour',
});

build({
  title: 'Sleep',
  description: '8 hour',
});
build({
  title: 'Cooking & eating',
  description: '3 houres',
});

build({
  title: 'Ванная комната',
  description: '2 houres',
});

build({
  title: 'Общение',
  description: '1 hour',
});

