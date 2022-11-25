const { Schema, model } = require("mongoose");

const position = {
  posX: { type: Number, required: true },
  posY: { type: Number, required: true },
};

const StandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  position: position,
  picture: [
    {
      type: String,
    },
  ],
  posts_id: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    require: true,
  },
});

module.exports = model("Stand", StandSchema);
