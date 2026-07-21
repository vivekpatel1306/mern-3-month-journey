import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {

    const token = req.cookies.token;
    console.log("token : " + token)
    if (!token) {
        return res.status(401).json({
            message: "Token not found"
        });
    }

    try {
        const decoded = jwt.verify(token, "Secret_key");

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid token"
        });
    }
};