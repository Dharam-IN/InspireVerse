import express from 'express';
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import ConnectDB from './db/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();

// Config env
dotenv.config();

// Cors Options
const CorsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
    optionSuccessStatus: 200
}

// Middleware
app.use(cors(CorsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

// Routes
app.use("/api/v1", userRouter)

// DB
ConnectDB();

export default app;
