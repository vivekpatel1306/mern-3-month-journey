const http =require("http")
const express=require("express")
const path=require("path")
const {Server}= require("socket.io")

const app=express()
const server=http.createServer(app)
const io=new Server(server)
const PORT = process.env.PORT || 9000;

io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
        io.emit("message",message);
    })
})

app.use(express.static(path.resolve("./public")))

server.listen(9000,()=>console.log("Server started in port :9000"))