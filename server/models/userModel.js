const { Schema, model } = require("mongoose");

const tasks = [
  {
    task_id: { type: Schema.Types.ObjectId },
    variants_id: { type: Schema.Types.ObjectId },
  },
];
const test = [
  {
    test_id: { type: Schema.Types.ObjectId },
    tasks: tasks,
  },
];
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: false,
  },
  gender: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  age: {
    type: Number,
  },
  role: {
    type: String,
    ref: "Role",
  },
  tests_id: test,
});

module.exports = model("User", UserSchema);
