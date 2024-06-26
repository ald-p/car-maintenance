require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

/* CORS */
const corsOptions = {
  origin: 'http://localhost:5000',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

/* Body parsers */
app.use(express.json());

/* Database connection */
mongoose.connect(process.env.MONGODB_URI);

/* Routes */
// Home
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Car Maintenance API!' });
});

// Controllers
const recordsController = require('./routes/records');
app.use('/records', recordsController);

const usersController = require('./routes/users');
app.use('/users', usersController);

// 404 Route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found!' });
});

/* Error handling middleware */
app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});

/* Listener */
app.listen(port, () => console.log(`Server running on port ${port}...`));
