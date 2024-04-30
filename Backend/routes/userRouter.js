import express from 'express';
import { RegisterController } from '../controllers/user.controller.js';

const router = express.Router();

// Signup Router
router.post("/register", RegisterController)

export default router;