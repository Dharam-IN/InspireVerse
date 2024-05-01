import JWT from 'jsonwebtoken';
import { UserModel } from '../models/userModel.js';

export const isAuthenticated = async(req, res, next) => {
    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({
                success: false,
                message: "User Not Authenticated"
            })
        }

        const decode = JWT.verify(token, process.env.JWT_SECURE);
        
        const user = await UserModel.findById(decode.id);

        req.user = user;
        next();

    } catch (error) {
        return console.log(error)
    }
}
