import express from "express";
import { connectDB } from "./config/db.js";
import 'dotenv/config';
import router from "./Routes/router.js";
import authRouter from "./Routes/authRoutes.js";
import { trailMid } from "./middleware/trail.js";
import cors from "cors"
const app=express()
const port=3000


app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
connectDB();
app.use("/notes",router)
app.use(trailMid)
app.use("/auth",authRouter)
app.listen(port,()=>{
    console.log(`PORT is : ${port}`)
})