import mongoose from "mongoose";

export function connectToDb() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const url  = process.env.DB_CONNECTION_URL as string;
    return mongoose.connect(url);
  }
}