import express from 'express';
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import ConnectDB from './db/index.js';
import cookieParser from 'cookie-parser';

const app = express();

// Config env
dotenv.config();

// Middleware
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/api/v1", userRouter)

// DB
ConnectDB();

export default app;
