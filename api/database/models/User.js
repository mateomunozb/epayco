const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  cc: {
    type: Number,
    required: true,
    min: 10000000,
    max: 9999999999,
  },
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  phone: {
    type: Number,
    required: true,
    min: 1000000,
    max: 9999999999,
  },
  password: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
})

module.exports = userSchema
