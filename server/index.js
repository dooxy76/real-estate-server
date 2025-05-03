import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import http from "http";
import { Server } from "socket.io";

// Import route files
import userRouter from "./api/routes/user.route.js";
import auth from "./api/routes/auth.route.js";
import postRouter from "./api/routes/post.route.js";
import messageRouter from "./api/routes/message.route.js";
import conversationRoute from "./api/routes/conversation.route.js";
import notificationRoute from "./api/routes/notification.route.js";

// App setup
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "https://real-estate-server-3ciu32dxs-fabios-projects-71b0107c.vercel.app",
    credentials: true,
  })
);

// API routes
app.use("/api/users", userRouter);
app.use("/api/auth", auth);
app.use("/api/posts", postRouter);
app.use("/api/messages", messageRouter);
app.use("/api/conversations", conversationRoute);
app.use("/api/notifications", notificationRoute);

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start HTTP server and Socket.io
const expressServer = http.createServer(app);
const io = new Server(expressServer, {
  cors: {
    origin: "https://real-estate-server-3ciu32dxs-fabios-projects-71b0107c.vercel.app",
    credentials: true,
  },
});

expressServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
