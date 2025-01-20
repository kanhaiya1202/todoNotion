const mongoose = require("mongoose");

const organizationSchema = mongoose.schema({
  name: { type: String, required: true },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const toDoSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: Pending,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
  },
  completedBy: {
    type: mongoose.Schema.Types.ObjectId,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
  },
  createdAt: {
    type: Date,
    default: date.now,
  },
});

const toDoSchemaModel = mongoose.model("user", toDoSchema);
const organizationModel = mongoose.model("organization", organizationSchema);
const userModel = mongoose.model("user", userSchema);

module.exports(toDoSchemaModel, organizationModel, userModel);
