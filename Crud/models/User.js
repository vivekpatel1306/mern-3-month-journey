import  mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String,
        minlength: 6
    }
},
    {
        timestamps: true
    })

const User=mongoose.model("User", userSchema)
export default User