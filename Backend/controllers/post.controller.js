import mongoose from "mongoose";
import { postModel } from "../models/postModel.js";

export const postController = async (req, res) => {
    const {quote, category, author, subCategory, language} = req.body;

    try {
        if(!quote || !category || !author || !subCategory || !language){
            return res.status(400).json({
                success: false,
                message: "Please Fill All fields"
            })
        }

        const postedBy = req.user._id;
    
        const postCreate = await postModel.create({
            quote,
            category,
            author,
            subCategory,
            language,
            postedBy
        })
    
        res.status(201).json({
            success: true,
            message: "Post Successfully posted",
            statuscode: 201
        })
    } catch (error) {
        console.log(error)
    }

}


// Get All Posts
export const getAllPosts =async (req, res) => {
    try {
        const quotes = await postModel.find();
        res.json(quotes)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}


// Get Single Post
export const getSinglePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid post ID"
        });
    }

    try {
        const post = await postModel.findById(id);
        if(!post){
            return res.status(404).json({
                success: false,
                message: "Post Not Found"
            })
        }

        res.status(200).json({
            success: true,
            post
        })

    } catch (error) {
        console.log(error)
    }
}



// Delete Post
export const deletePost = async (req, res) => {
    try {
        // Extract user role from request
        const { role } = req.user;

        // Check if user role is authorized to delete posts
        if (role === "User") {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access: User role not allowed to delete posts."
            });
        }

        // Extract post ID from request parameters
        const { id } = req.params;

        // Find the post by ID
        const post = await postModel.findById(id);

        // If post not found, return error response
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found."
            });
        }

        // Delete the post
        await post.deleteOne();

        // Respond with success message
        res.status(200).json({
            success: true,
            message: "Post deleted successfully."
        });
    } catch (error) {
        // Handle unexpected errors
        console.error("Error deleting post:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
};
