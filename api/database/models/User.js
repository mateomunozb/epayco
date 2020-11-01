const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  cc: {
    type: String,
    required: true,
    min: 8,
    max: 10,
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
    type: String,
    required: true,
    min: 7,
    max: 10,
  },
  password: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  products: [{}],
})

module.exports = userSchema
