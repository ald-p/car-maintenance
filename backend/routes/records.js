// Requirements
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const Record = require('../models/Record');

// Get all records by user
router.get('/', auth, async (req, res, next) => {
  try {
    const records = await Record.find({ userId: req.auth.user.id });
    res.json(records);
  } catch (err) {
    next({ status: 500, message: 'Server error' });
  }
});

// Get record by id
router.get('/:id', auth, async (req, res, next) => {
  try {
    const record = await Record.findOne({ _id: req.params.id });

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
router.post('/', auth, async (req, res, next) => {
  const { date, tasks, mileage } = req.body;
  try {
    const newRecord = new Record({
      userId: req.auth.user.id,
      date,
      tasks,
      mileage,
    });
    const record = await newRecord.save();
    res.status(201).json(record);
  } catch (err) {
    next({ status: 500, message: 'Server error' });
  }
});

// Update a record
router.put('/:id', auth, async (req, res, next) => {
  const { date, tasks, mileage } = req.body;
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      { date, tasks, mileage },
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
router.delete('/:id', auth, async (req, res, next) => {
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

module.exports = router;
