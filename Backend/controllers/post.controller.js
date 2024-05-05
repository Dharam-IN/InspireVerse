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
