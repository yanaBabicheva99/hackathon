const {Schema, model} = require('mongoose');

const TestSchema = new Schema({
  tasks_id: {
    type: Schema.Types.ObjectId,
    ref: 'Task'
  },
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,d
  }
})