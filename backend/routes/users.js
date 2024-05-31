// Requirements
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Get users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Signup Route
router.post('/signup', async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    // Check if username exists already
    let user = await User.findOne({ email });

    // Throw error if user exists already
    if (user) {
      return next({ status: 400, message: 'User already exists' });
    }

    // Create new user if user does not exist
    user = new User({ username, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Assign JWT
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    next({ status: 500, message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Check that email exists
    const user = await User.findOne({ email });

    // Throw error if user does not exist
    if (!user) {
      return next({ status: 400, message: 'Invalid Credentials' });
    }

    // Check password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next({ status: 400, message: 'Invalid Credentials' });
    }

    // Assign JWT
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
