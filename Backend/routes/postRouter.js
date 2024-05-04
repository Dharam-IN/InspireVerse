import express from 'express';
import { postController } from '../controllers/post.controller.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

// Post Router
router.post("/post", isAuthenticated, postController)

export default router;