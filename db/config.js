const mongos = require("mongoose")
const db = process.env.DATABASE

mongos.connect(db).then(()=>{
    console.log("connection successfully")
}).catch((err) => console.log("connection failed"))