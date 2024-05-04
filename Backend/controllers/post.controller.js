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
    
        const postCreate = await postModel.create({
            quote,
            category,
            author,
            subCategory,
            language
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

export const getAllPosts =async (req, res) => {
    try {
        const quotes = await postModel.find();
        res.json(quotes)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}