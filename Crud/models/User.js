import mongoose from "mongoose"
import bcrypt from "bcrypt"
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
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10)

})
userSchema.post("save", async function (doc) {
    console.log(`email is in console : ${doc.email} ansd pass : ${doc.password}`)
})
const User = mongoose.model("User", userSchema)
export default User