export const errorMiddleware=(err,req,res,next)=>{
res.json({
    message:err.name,
    resss:"restify"
})
}