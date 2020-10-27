require('dotenv').config()

const userSchema = require('./models/User')

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

module.exports = User
