const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

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
  sexo: {
    type: [{
      type: String,
      enum: ['M', 'F', 'Uninformed']
    }]
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  list: [listSchema]
})

module.exports = mongoose.model('Users', UserSchema)
