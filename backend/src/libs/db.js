import mongoose from "mongoose";
import { env } from "process";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected", mongoose.connection.host);
  } catch (error) {
    console.log("MngoDB Error", error);
  }
};
