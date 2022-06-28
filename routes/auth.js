const app = require("express")
const routes = app.Router()
const bcrypt = require("bcrypt")



const User = require("../model/userSchema")
// const middleWear = (req,res,next) =>{
//     console.log("middlewear")
// }
routes.get("/", (req, res) => {
    res.send("hello from routes")
})

routes.get("/about", (req, res) => {
    res.send("hello from aboute page")
    res.cookie('title', 'GeeksforGeeks');
})


// using promises ====>


// routes.post("/reg",(req,res)=>{
//     const {name,email,phone,work,password,cpassword} = req.body
//     if(!name || !email|| !phone || !work || !password || !cpassword){
//         return res.status(402).json({error:"please fill all the fields"})
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"email already exist "})
//         }
//         const user = new User({name,email,phone,work,password,cpassword})
//         user.save()
//         console.log(name)
//     }).catch(err => {console.log(err)})

// })


// using async await
routes.post("/reg", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(402).json({ error: "please fill all the fields" })
    }

    try {
        

        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "email already exist " })
        }

        const user = new User({ name, email, phone, work, password, cpassword })
        await user.save()
        res.status(200).json({ error: "data submit successfully" })


    } catch (err) {
        console.log(err)
    }

})

routes.post('/signin', async (req, res) => {
    // let TokenGen;
    const {email,password} = req.body
    if(!email || !password){
        return res.status(402).json({message:"please fill all credentials"})
    }

    try {
        let TokenGen;
        const userExist = await User.findOne({email:email})
        if(userExist){
            const isMatch = bcrypt.compare(password,userExist.password)
            TokenGen = await userExist.generateAuthToken()
            res.cookie("token",TokenGen)
            console.log(TokenGen)

            if(!isMatch){
                res.status(402).json({message:"invalid credentials"})
            }else{
                res.status(200).json({message:"login successfully"})
            }
        }else{
            res.status(402).json({message:"invalid credentials"})
        }

    } catch (err) {
        console.log(err)

    }
  
    
})





module.exports = routes