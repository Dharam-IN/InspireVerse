import express from 'express';
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import postRouter from './routes/postRouter.js'
import ConnectDB from './db/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();

// Config env
dotenv.config();

// Cors Options
const CorsOptions = {
    origin: ["https://inspire-verse.vercel.app/"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}

// Middleware
app.use(cors(CorsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

// Routes
app.use("/api/v1/user", userRouter)
app.use("/api/v1/post", postRouter)

// DB
ConnectDB();

export default app;
