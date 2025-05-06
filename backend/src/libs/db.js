import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected", mongoose.connection.host);
  } catch (error) {
    console.log("MngoDB Error", error);
  }
};
