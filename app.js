const express  = require("express")
const app = express()
const mongos = require("mongoose")

const db = "mongodb+srv://sulemanahmed:suleman30@cluster0.igoox.mongodb.net/mernstack?retryWrites=true&w=majority"

mongos.connect(db).then(()=>{
    console.log("connection successfully")
}).catch((err) => console.log("connection failed"))

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

app.listen(3000,()=>{
    console.log("listen from port 3000")
})