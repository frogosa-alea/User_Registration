const mongoose = require('mongoose');

const Todo = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  text: String,
  description: String
});

module.exports = mongoose.model('Todo', Todo);