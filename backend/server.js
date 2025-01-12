const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // To load variables from .env file

const app = express();

// Middleware
app.use(express.json()); // To parse JSON data in the request body
app.use(cors()); // Enable CORS for frontend-backend communication

// Routes
app.use('/api/auth', authRoutes); // Authentication routes

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:${PORT}");
});