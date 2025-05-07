import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./libs/db.js";

const APP = express();
const PORT = process.env.PORT || 5002;

APP.use(express.json()); //allow json data to be sent in the request body
dotenv.config();

APP.use("/api/auth", authRoutes);

APP.listen(PORT, () => {
  console.log(`Server Is Running On Port ${PORT}`);
  connectDB();
});
