const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../database/db')
const { schemaRegister } = require('../database/models/validate')

router.post('/login', async (req, res) => {
  const user = await User.findOne({ cc: req.body.cc })
  if (!user)
    res.status(400).json({
      auth: false,
      message: 'Número de documento o contraseña incorrectos',
    })

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword)
    res.status(400).json({
      auth: false,
      message: 'Número de documento o contraseña incorrectos',
    })

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: 60 * 60,
    }
  )

  res.json({
    auth: true,
    token,
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

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: 60 * 60,
    }
  )
  try {
    const userDB = await user.save()
    res.json({
      auth: true,
      token,
    })
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
