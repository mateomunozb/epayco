const { Schema } = require('mongoose')

const productSchema = Schema({
  productName: {
    type: String,
    require: true,
  },
  description: String,
  email: String,
  subtotal: {
    type: Number,
    require: true,
  },
  descuento: {
    type: Number,
    require: false,
  },
  total: Number,
  status: String,
})

module.exports = productSchema
