const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  type: {
    type: String
  },
  variants_id: {
    ref: 'Variant',
    type: Schema.Types.ObjectId
  }
})