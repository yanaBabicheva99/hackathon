const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
  },
  pictures: [
    {
      type: String,
    },
  ],
});

module.exports = model("Post", PostSchema);
