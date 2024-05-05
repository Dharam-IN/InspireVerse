import JWT from 'jsonwebtoken';
import { UserModel } from '../models/userModel.js';

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        // console.log(token)
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "User Not Authenticated"
            });
        }

        const decoded = JWT.verify(token, process.env.JWT_SECURE);
        const user = await UserModel.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
