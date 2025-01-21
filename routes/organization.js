const Router = require("express");
const {organizationModel ,toDoModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASS = "user123";// later we will shift this to .env file

const orgRouter = Router();

//create org
orgRouter.post("/", function(req,res){

});

//get todos inside organization 
orgRouter.get("/", function(req,res){

});

orgRouter.post("/add-user", function(req,res){

});

orgRouter.post("/remove-user", function(req,res){

});

orgRouter.post("/add-user", function(req,res){

});

//add todo
orgRouter.post("/todo", function(req,res){

});

//delete todo
orgRouter.delete("/todo", function(req,res){

});



module.exports = {
    orgRouter: orgRouter
}
