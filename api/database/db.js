require('dotenv').config()

const userSchema = require('./models/User')
const productSchema = require('./models/Product')

const { model, connect } = require('mongoose')

connect(process.env.URI, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error('Error'))

const User = model('User', userSchema)
const Product = model('Product', productSchema)

module.exports = { User, Product }
