import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./libs/db.js";
import cookieParser from "cookie-parser";
dotenv.config();

const APP = express();
const PORT = process.env.PORT || 5001;

APP.use(express.json()); //allow json data to be sent in the request body
APP.use(cookieParser()); //allows to parse the cookie

APP.use("/api/auth", authRoutes);
APP.use("api/message", messageRoutes);

APP.listen(PORT, () => {
  console.log(`Server Is Running On Port ${PORT}`);
  connectDB();
});
