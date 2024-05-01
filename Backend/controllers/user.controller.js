import { UserModel } from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import { sentToken } from "../utils/jwtUtils.js";

export const RegisterController = async (req, res) =>{
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
            message: "Please Fill All Fields - pass"
        })
    }
    
    // Check User Role and Email
    if(isEmail.role !== role){
        return res.status(404).json({
            success: false,
            message: "This Email not match this role"
        })
    }

    sentToken(isEmail, 200, res, "Login Successfully");
    
}