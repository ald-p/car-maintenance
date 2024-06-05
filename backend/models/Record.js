const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: {
      type: String,
      required: true,
    },
    date: { type: Date, required: true },
    mileage: {
      type: Number,
      required: true,
    },
    shop: {
      type: String,
      required: true,
    },
    tasks: {
      type: [String],
      required: true,
    },
    notes: String,
    cost: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
