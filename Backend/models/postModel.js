import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    }
})

export const postModel = mongoose.model("quotes", postSchema);