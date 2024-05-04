import express from 'express';
import { getAllPosts, postController } from '../controllers/post.controller.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

// Post Router
router.post("/post", isAuthenticated, postController)

// Get All Posts
router.get("/getallposts", getAllPosts)

// Get One Post
export default router;