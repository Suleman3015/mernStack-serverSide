const express  = require("express")
const app = express()
const mongos = require("mongoose")
const DotEnv = require("dotenv")
DotEnv.config({path:"./config.env"})

require("./db/config")
const port = process.env.PORT





app.get("/",(req , res) =>{
    res.send("hello this is home server")
})

app.get("/contact",(req , res) =>{
    res.send("hello contact")
})

app.get("/about",(req , res) =>{
    res.send("hello about")
})

app.get("/signin",(req , res) =>{
    res.send("hello sign in")
})

app.listen(port,()=>{
    console.log(`listen from port ${port}`)
})