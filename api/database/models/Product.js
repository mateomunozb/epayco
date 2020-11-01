const { Schema } = require('mongoose')

const productSchema = Schema({
  productName: String,
  description: String,
  email: String,
  subtotal: Number,
  descuento: Number,
  total: Number,
  status: String,
})

module.exports = productSchema
