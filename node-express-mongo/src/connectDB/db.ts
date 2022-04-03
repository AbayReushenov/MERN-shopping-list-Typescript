import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
  console.log(`Установлено соединение с MongoDB:${conn.connection.host}`)
};
  