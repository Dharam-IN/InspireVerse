import { UserModel } from "../models/userModel.js";
import bcryptjs from 'bcryptjs';

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