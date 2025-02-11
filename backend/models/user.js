const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  }
});

// Create a user model
const User = mongoose.model('User', userSchema);

module.exports = User;