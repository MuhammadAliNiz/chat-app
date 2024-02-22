import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

//Middlewears
app.use(express.json());
app.use(cookieParser());

//Routes Middlewears
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
  connectToMongoDB();
});
