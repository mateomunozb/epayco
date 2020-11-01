require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

//Initializations
const app = express()
const PORT = process.env.PORT || 3001
const authRoutes = require('./routes/auth')
const verifyToken = require('./routes/validate-token')
const profile = require('./routes/profile')
const productRoute = require('./routes/products')

//Cors
const cors = require('cors')
app.use(cors())

////Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.use('/api/user', authRoutes)
app.use('/api/profile', verifyToken, profile)
app.use('/api/profile', verifyToken, productRoute)
app.get('/api', (req, res) => {
  res.json({
    estado: true,
    mensaje: 'funcional ',
  })
})

//Server
app.listen(PORT, () => console.log(`Server on port ${PORT}!`))
