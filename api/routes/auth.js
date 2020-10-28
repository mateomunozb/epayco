const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../database/db')
const { schemaRegister, schemaLogin } = require('../database/models/validate')

router.post('/login', async (req, res) => {
  const { error } = schemaLogin.validate(req.body)

  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }

  const user = await User.findOne({ cc: req.body.cc })
  if (!user) res.status(400).json({ error: true, message: 'cc does not exists' })

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) res.status(400).json({ error: true, message: 'Invalid password' })

  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
    },
    process.env.TOKEN_SECRET
  )

  res.header('auth-token', token).json({
    error: null,
    message: 'Welcome',
    data: {
      token,
    },
  })
})

router.post('/register', async (req, res) => {
  const { error } = schemaRegister.validate(req.body)

  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }

  const { cc, name, email, phone } = req.body

  const emailExist = await User.findOne({ email })
  const ccExist = await User.findOne({ cc })
  if (emailExist) return res.status(400).json({ error: true, message: 'email already exists' })
  if (ccExist) return res.status(400).json({ error: true, message: 'cc already exists' })

  const password = await bcrypt.hash(req.body.password, 10)

  const user = new User({
    cc,
    name,
    email,
    phone,
    password,
  })

  try {
    const userDB = await user.save()
    res.json({
      error: null,
      data: userDB,
    })
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
