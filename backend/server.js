const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

/* CORS */
app.use(cors());

/* Body parsers */
app.use(express.json());

/* Database connection */
mongoose.connect('mongodb://localhost/car_maintenance');

/* Routes */
// Home
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Car Maintenance API!' });
});

// Controllers
const recordsController = require('./routes/records');
app.use('/records', recordsController);

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
