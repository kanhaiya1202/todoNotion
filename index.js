const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();

const { userRouter } = require("./routes/user");
const {oragnizationRouter } = require("./routes/organization");
const { myTodoRouter } = require("./routes/myTodo");

app.use("/user", userRouter);
app.use("/organization", oragnizationRouter);
app.use("/myTodo", myTodoRouter);

const dbConnect = async (req, res) => {
  const { connectDb } = await mongoose.connect(process.env.MONGO_URL);
  //process.env.MONGO_URL is just the url on our mongoDB
  //it access this url in .env file where MONGO_URL = add your own mongo url
  app.listen(3000);
};

dbConnect();
