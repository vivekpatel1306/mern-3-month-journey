import express from "express";
import { connectDB } from "./config/db.js";
import 'dotenv/config';
import router from "./Routes/router.js";
import authRouter from "./Routes/authRoutes.js";
import cors from "cors"
import { authMiddleware } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
const app=express()
const port=3000

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true                                                                                                            
}))
connectDB();
app.use("/notes",authMiddleware,router)
// app.use(trailMid)
app.use("/auth",authRouter)
app.listen(port,()=>{
    console.log(`PORT is : ${port}`)
})