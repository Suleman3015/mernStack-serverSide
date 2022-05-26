const mongoos = require("mongoose")


const userSchema = new mongoos.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: number,
        required:true
    },
    work:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    cpassword:{
        type: String,
        required:true
    },
        
})

const User = mongoos.model("USER",userSchema)

module.exports = User