import express from "express"
import {Server} from "socket.io"
import cors from "cors"
import http from "http"

const app = express()
app.use(cors())
const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})

io.on("connection", (socket) => {
    console.log("Connection made.");
    

    socket.on("disconnect", () => {
        console.log("Connection disconnected.");
    });
})