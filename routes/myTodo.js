const jwt = require("jsonwebtoken");
const JWT_USER_PASS = "user123";// later we will shift this to .env file

const myTodoRouter = Router();

//this is not organization todo ,it is personal
myTodoRouter.post("/add-todo", function(req,res){

});

myTodoRouter.delete("/delete-todo", function(req,res){

});

//see all my todo
myTodoRouter.get("/", function(req,res){

});




module.exports={
    myTodoRouter:myTodoRouter
}