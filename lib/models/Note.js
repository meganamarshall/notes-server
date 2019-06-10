const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  body: {
    type: String,
    maxlength: 1050
  }
});

module.exports = mongoose.model('Note', noteSchema);
