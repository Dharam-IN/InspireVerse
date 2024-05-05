import express from 'express';
import { GetUser, LoginController, LogoutController, RegisterController, getMyProfile } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

// Register Router
router.post("/register", RegisterController)

// Login Router
router.post("/login", LoginController)

// Logout Route
router.get("/logout", isAuthenticated, LogoutController)

// Get User
router.get("/getuser", isAuthenticated, GetUser)

// My Posts
router.get("/myprofile", isAuthenticated, getMyProfile)

export default router;