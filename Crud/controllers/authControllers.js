import { generateToken as gt } from "../utils/generateTokens.js";
import User from "../models/User.js";
import bcrypt from "bcrypt"
export const register = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        console.log(email, name, password)
        if (!email || !name || !password) {
            return res.json(404).json({
                message: "All fields are required"
            })
        }
// await User.findOne({ email: undefinedVariable });
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(301).json({
                message: "USer already EXISTS.."
            })
        }

        // const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name, email, password
        })
        // console.log("first")
        res.status(200).json({
            message: "USer created Successfully",
            // token: gt(user._id,user.email),
            user: {
                name: user.name,
                id: user._id,
                email: user.email,
                password: user.password
            }
        })
      
    } catch (error) {
       next(error)
    // res.status(500).json({
    //     message:error.message
    // })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        if (!email || !password) {
            return res.status(400).json({
                message: "Fill all credentials"
            })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "USer not found"
            })
        }

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return res.status(400).json({
                message: "Enter Correct password"
            })
        }

        const generatedToken = await gt(user._id)

        res.status(201).cookie("token", generatedToken, {
            httpOnly: true,
            secure: true,
            sameSite: "Lax"
        }).
            json({
                message: "User succesfully logged innn ",
                token: generatedToken,
                user: {
                    id: user._id,
                    email: user.email,
                    name: user.name
                }
            })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}