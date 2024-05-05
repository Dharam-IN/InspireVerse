import { UserModel } from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import { sentToken } from "../utils/jwtUtils.js";
import { postModel } from "../models/postModel.js";

export const RegisterController = async (req, res) =>{
    // console.log(req.body)
    try {
        const {name, email, password, role, phonenumber} = req.body;
    
    // Check Fields
    if(!name || !email || !password || !role || !phonenumber){
        return res.status(404).json({
            success: false,
            message: "Please Fill all fields"
        })
    }

    // User Exists Or Not
    const isEmail = await UserModel.findOne({email});

    if(isEmail){
        return res.status(401).json({
            success: false,
            message: "This Email Allready Exists try Another Email"
        })
    }

    // Convert Normal Password to Hashed Password
    const saltRound = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRound);

    // User Save

    const User = await UserModel.create({
        name,
        email,
        password: hashedPassword,
        phonenumber,
        role
    })

    res.status(200).json({
        success: true,
        message: "Register Succesfully",
        User
    })
    } catch (error) {
        console.log(error);
    }

}

export const LoginController = async(req, res) => {
    const {email, password, role} = req.body;

    if(!email || !password || !role){
        return res.status(404).json({
            success: false,
            message: "Please Fill All fields",
            statusCode: 404
        })
    }

    // User Exists
    const isEmail = await UserModel.findOne({email});

    if(!isEmail){
        return res.status(401).json({
            success: false,
            message: "Please Enter valid Details - email",
            statusCode: 401
        })
    }


    // Password Match
    const passwordMatch = await bcryptjs.compare(password, isEmail.password);
    if(!passwordMatch){
        return res.status(404).json({
            success: false,
            message: "Please Enter valid Details - pass"
        })
    }
    
    // Check User Role and Email
    if(isEmail.role !== role){
        return res.status(404).json({
            success: false,
            message: "This Email not match this role"
        })
    }
    // console.log("check")
    sentToken(isEmail, 200, res, "Login Successfully");
    
}

export const LogoutController = (req, res, next) => {
    try {
        res.status(201).cookie("token", "", {
            httpOnly: true,
            expires: new Date(Date.now())
        }).json({
            success: true,
            message: "User Logout Successfully"
        })
    } catch (error) {
        
    }
}


export const GetUser = async (req, res, next) => {
    try {
        const user = req.user;
        
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "User not find"
        })
    }
}



// Get My Posts
export const getMyProfile = async (req, res) => {
    try {
        const myProfile = await postModel.find({ postedBy: req.user._id });
        res.status(200).json({
            success: true,
            myProfile
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
