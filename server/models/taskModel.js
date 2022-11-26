const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
  },
  variants_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Variant",
    },
  ],
});

module.exports = model("Task", TaskSchema);
