const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const organizationSchema = new Schema({
  name: String,
  creatorId: ObjectId,
  members:[{
    user:ObjectId,
    role:{type:String, enum:['creator', 'member'], default:'member'}
  }]
});

const toDoSchema = new Schema({
  title:String,
  description: String,
  createdAt: { type: Date, default: date.now},
});

const userSchema = new Schema({
  name: String,
  email: {type:String, unique:true},
  password:String
});

const toDoModel = mongoose.model("todo", toDoSchema);
const organizationModel = mongoose.model("organization", organizationSchema);
const userModel = mongoose.model("user", userSchema);

module.exports(toDoModel, organizationModel, userModel);
