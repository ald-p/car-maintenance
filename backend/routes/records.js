// Requirements
const express = require('express');
const router = express.Router();
const Record = require('../models/Record');

// Get all records by user
router.get('/', async (req, res, next) => {
  try {
    const records = await Record.find({ userId: req.user.id });
    res.json(records);
  } catch (err) {
    next({ status: 500, message: 'Server error' });
  }
});

// Get record by id
router.get('/:id', async (req, res, next) => {
  try {
    const record = await Record.find({ recordId: req.params.id });

    if (!record) {
      next({ status: 404, message: 'Record not found' });
    } else {
      res.json(record);
    }
  } catch (err) {
    next({ status: 500, message: 'Server error' });
  }
});

// Add a new record for a specific user
router.post('/', async (req, res, next) => {
  const { date, tasks } = req.body;
  try {
    const newRecord = new Record({ userId: req.user.id, date, tasks });
    const record = await newRecord.save();
    res.json(record);
  } catch (err) {
    next({ status: 500, message: 'Server error' });
  }
});

// Update a record
router.put('/:id', async (req, res, next) => {
  const { date, tasks } = req.body;
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      { date, tasks },
      { new: true }
    );

    if (!record) {
      next({ status: 404, message: 'Record not found' });
    } else {
      res.json(record);
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete a record
router.put('/:id', async (req, res, next) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);

    if (!record) {
      next({ status: 404, message: 'Record not found' });
    } else {
      res.json(record);
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = Router;
