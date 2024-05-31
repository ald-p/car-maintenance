const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String },
  cost: { type: Number },
});

const RecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  tasks: [TaskSchema],
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
