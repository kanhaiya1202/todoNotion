const Router = require("express");
const {organizationModel , userModel } = require("../db");
const {auth } = require("../middleware/auth");


const orgRouter = Router();

//create org
orgRouter.post("/",auth ,async function(req,res){
    const userId = req.userId;

    const {name } = req.body;

    const newOrg = await organizationModel.create({
        name:name,
        creatorId: userId,
        members:  [{ user: req.userId, role: 'creator' }]
    })

    res.status(201).json({
        message: 'Organization created successfully'
    });

});

//get todos inside organization 
orgRouter.get("/",auth ,async function(req,res){

});

orgRouter.post("/add-user",auth ,async function(req,res){
    const creatorId = req.userId;

    const { email, name } =req.body;

    const newUser = await userModel.findOne({
        email
    })

    const newUserId = newUser.map(addUser =>addUser.userId)

    const userInOrg = await organizationModel.find({
        _id: newUserId
    })

    if(!userInOrg){
        await organizationModel.create({
            name,
            creatorId:creatorId,
            members: [{user:newUserId, role: "member"}]
        })
    }

});

orgRouter.post("/remove-user",auth , function(req,res){

});

orgRouter.post("/add-user",auth , function(req,res){

});

//add todo
orgRouter.post("/todo",auth , function(req,res){

});

//delete todo
orgRouter.delete("/todo",auth , function(req,res){

});



module.exports = {
    orgRouter: orgRouter
}
