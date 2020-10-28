require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

//Initializations
const app = express()
const PORT = process.env.PORT || 3001
const authRoutes = require('./routes/auth')
const verifyToken = require('./routes/validate-token')
const profile = require('./routes/profile')

////Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.use('/api/user', authRoutes)
app.use('/api/profile', verifyToken, profile)
app.get('/', (req, res) => {
  res.json({
    estado: true,
    mensaje: 'funcional ',
  })
})

//Server
app.listen(PORT, () => console.log(`Server on port ${PORT}!`))
