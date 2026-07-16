export const trailMid=(req,res,next)=>{
    console.log("first middleware")
    // res.json({
    //     message:"res of middleware"
    // })
    next()
}