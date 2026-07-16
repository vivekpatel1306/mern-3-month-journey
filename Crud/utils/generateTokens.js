import jwt from "jsonwebtoken"
export const generateToken=(id,email)=>{
return jwt.sign(
    {id,email},"Secret_key",{expiresIn:"1d"}
)
}

