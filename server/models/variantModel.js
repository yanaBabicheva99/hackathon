const { Schema, model } = require("mongoose");

const VariantSchema = new Schema({
  value: {
    type: String,
    require: true,
  },
  isAnswer: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Variant", VariantSchema);
