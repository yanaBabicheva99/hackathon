const { Schema, model } = require("mongoose");

const TestSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  tasks_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

module.exports = model("Test", TestSchema);
