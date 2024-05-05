import express from 'express';
import { deletePost, getAllPosts, getSinglePost, postController } from '../controllers/post.controller.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

// Post Router
router.post("/post", isAuthenticated, postController)

// Get All Posts
router.get("/getallposts", getAllPosts)

// Get Single Post
router.get("/:id", getSinglePost)

// Delete Post
router.delete("/delete/:id", isAuthenticated, deletePost)

export default router;