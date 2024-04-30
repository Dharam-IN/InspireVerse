import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["User", "Author"]
    }
})


// Model
export const UserModel = mongoose.model("UsersData", UserSchema);