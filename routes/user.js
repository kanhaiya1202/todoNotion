const {Router} = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASS = "user123";// later we will shift this to .env file
const {userAuth } = require("../middleware/auth");

const userRouter = Router();

userRouter.post("/signup",async function(req,res){

    const {email ,name , password } =req.body;

    const userExist = await userModel.findOne({
        email
    });

    if(userExist){
        res.json({
            message:"user already exist"
        })
        return; 
    }

    await userModel.create({
        email,
        password,
        name
    });

    res.json({
        message:"signup successful !"
    })
});

userRouter.post("/signin", userAuth ,async function(req,res){
    const {email } = req.body;

    const user = await userModel.findOne({
        email
    })

    if(!user){
        res.json({
            message:"user does not exist"
        })
        return
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