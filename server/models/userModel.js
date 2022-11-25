const { Schema, model } = require("mongoose");

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
    ref: 'Role',
  }
});

module.exports = model("User", UserSchema);
