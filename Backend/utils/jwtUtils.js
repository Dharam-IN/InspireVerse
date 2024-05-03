import JWT from 'jsonwebtoken';

export const getJWTToken = (userData) =>{
    const {_id, role} = userData;
    const tokenData = {
        id: _id,
        role: role
    }

    const token = JWT.sign(tokenData, process.env.JWT_SECURE, {
        expiresIn: '7D'
    })

    return token;
}

export const sentToken = (user, statusCode, res, message) => {
    const token = getJWTToken(user);

    const options = {
        expires: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
        ),
        httpOnly :true
    };

    // Log the token and cookie
    // console.log("Token:", token);
    // console.log("Cookie:", options);

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        message,
        token
    })
}
