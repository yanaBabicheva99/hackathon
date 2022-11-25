const { Schema, model } = require("mongoose");

const stand = [
  {
    stand_id: {
      type: Schema.Types.ObjectId,
      ref: "Stand",
      require: true,
    },
    count: { type: Number },
    wayDiscription: { type: String },
  },
];

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  redactors_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  creator_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  stands_id: stand,
});

module.exports = model("Event", EventSchema);
