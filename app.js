const express  = require("express")
const app = express()
const DotEnv = require("dotenv")
DotEnv.config({path:"./config.env"})

require("./db/config")
app.use(express.json())
app.use(require("./routes/auth"))

const port = process.env.PORT


app.listen(port,()=>{
    console.log(`listen from port ${port}`)
})