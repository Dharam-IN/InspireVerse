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
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "UsersData",
        required: true
    },
    postDate:{
        type: Date,
        default: Date.now
    }
})

export const postModel = mongoose.model("quotes", postSchema);