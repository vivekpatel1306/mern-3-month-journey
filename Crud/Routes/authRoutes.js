import { login, register } from "../controllers/authControllers.js"
import express from "express"
import { errorMiddleware } from "../middleware/errorMiddleware.js"
const authRouter=express.Router()
authRouter.post("/register",errorMiddleware,register)
authRouter.post("/login",login)
export default authRouter;                                                                                                                  