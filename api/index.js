const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    estado: true,
    mensaje: 'funcional ',
  })
})

app.listen(PORT, () => console.log(`Server on port ${PORT}!`))
