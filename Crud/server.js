import express from "express";
import { connectDB } from "./config/db.js";
import 'dotenv/config';
const app=express()
const port=3000
app.use(express.json());
app.use("/",(req,res)=>[
    res.status(200).json({
data:"vivek",
age:23
    })      
    
])
connectDB();

app.listen(port,()=>{
    console.log(`PORT is : ${port}`)
})