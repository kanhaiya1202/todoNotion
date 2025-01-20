const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();

const { userRouter } = require("./routes/user");
const { headRouter } = require("./routes/head");

app.use("/api/v1/user", userRouter);

const dbConnect = async (req, res) => {
  const { connectDb } = await require("./config/database.js");
  app.listen(3000);
};
