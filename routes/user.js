const Router = require("express");
const {userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASS = "user123";// later we will shift this to .env file
const {auth } = require("../middleware/auth");

const userRouter = Router();

userRouter.post("/signup",async function(req,res){

    const {email ,name , password } =req.body;

    const userExist = await mongoose.findOne({
        email
    });

    if(userExist){
        res.json({
            message:"user already exist"
        })
        return; 
    }

    await mongoose.createConnection({
        email,
        password,
        name
    });

    res.json({
        message:"signup successful !"
    })
});

userRouter.post("/signin",auth ,async function(req,res){
    const {email , password} = req.body;

    const user = await mongoose.findOne({
        email
    })

    if(!user){
        res.json({
            message:"user does not exist"
        })
    }

    const token = jwt.sign({
        id: user._id
    },JWT_USER_PASS);

    res.json({
        token:token
    })

});

module.exports = {
    userRouter: userRouter
}