// https://medium.com/swlh/typescript-with-mongoose-and-node-express-24073d51d2ee
import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import { routerTodo } from './todo';

const app = express();

app.use(json());
app.use('/api/todo', routerTodo);
const MONGO_URI =
  'mongodb+srv://abay1234:3233abgq4jkh43i743hiu@api.76jmt.mongodb.net/apimongod?retryWrites=true&w=majority';

const MONGO_LOCALHOST_URI = "mongodb://localhost:27017/todo";
const optionsDepricated = {
  useCreateIndex:true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}
const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
// mongoose.connect(MONGO_URI, () => {
//   console.log(`Установлено соединение с MongoDB - apimongod`);
// });
mongoose.connect(MONGO_LOCALHOST_URI, options,  () => {
  console.log(`Установлено соединение с MongoDB - ${MONGO_LOCALHOST_URI}`);
});

app.listen(5000, () => {
  console.log('Сервер слушает порт 5000');
});
