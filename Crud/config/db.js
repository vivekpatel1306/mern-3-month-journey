import mongoose from "mongoose";
export const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://vivekpatel:vivekpatel@cluster0.mfvkmyr.mongodb.net/ToDo")
        console.log("Mongoose Connected")
    } catch (error) {
        console.log(`Mongoose Not Connected ${error}`)
        
    }
}
