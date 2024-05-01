import express from 'express';
import { LoginController, RegisterController } from '../controllers/user.controller.js';

const router = express.Router();

// Register Router
router.post("/register", RegisterController)

// Login Router
router.post("/login", LoginController)


export default router;