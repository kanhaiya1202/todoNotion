const Router = require("express");
const {userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASS = "user123";// later we will shift this to .env file

const userRouter = Router();

userRouter.post("/signup",function(req,res){

});

userRouter.post("/signin", function(req,res){

});

module.exports = {
    userRouter: userRouter
}