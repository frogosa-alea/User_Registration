const mongoose = require('mongoose');

const Todo = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  username: String,
  email: String,
  name: String,
  text: String,
  description: String
});

module.exports = mongoose.model('Todo', Todo);