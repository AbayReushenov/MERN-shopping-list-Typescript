import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  const conn = await mongoose.connect(`${process.env.DB_CONN_STRING}`);
  console.log(`Установлено соединение с MongoDB:${conn.connection.host}`)
};
  