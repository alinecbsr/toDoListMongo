const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the user name',
    minlength:3
  },
  email: {
    type: String,
    required: `Please enter the user's email`
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Users', UserSchema)