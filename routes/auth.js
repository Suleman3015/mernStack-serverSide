const app = require("express")
const routes = app.Router()



routes.get("/",(req,res)=>{
    res.send("hello from routes")
})

routes.post("/reg",(req,res)=>{
    console.log(req.body)
    res.json({message : req.body})
})


module.exports = routes