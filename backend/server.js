import express from "express"
const PORT=9000
const app=express()
app.get("/",(req,res)=>{
    res.send( "hello")
})

app.listen(PORT,()=>{
    console.log(`Port is : ${PORT}`)
})

// const jsonData={
//     name:"vivek",
//     age:50
// }
// console.log(`Object is : ${typeof jsonData}`)
// const Json=JSON.stringify(jsonData)
// console.log(`String is : ${typeof Json}`)
// // console.log(typeof Json )
// const rjson=JSON.parse(Json)
// // console.log(typeof rjson)
// console.log(`Backed Object is : ${typeof rjson}`)