export const trailMid=(req,res,next)=>{
    console.log("first middleware")
    next()
}