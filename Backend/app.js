import express from 'express';
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import ConnectDB from './db/index.js';

const app = express();

// Config env
dotenv.config();

// Middleware
app.use(express.json())

// Routes
app.use("/api/v1", userRouter)

// DB
ConnectDB();

export default app;
