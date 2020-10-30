const Joi = require('joi')

const schemaRegister = Joi.object({
  cc: Joi.string().min(8).max(10).required(),
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  phone: Joi.string().min(7).max(10).required(),
  password: Joi.string().min(6).max(1024).required(),
})

const schemaLogin = Joi.object({
  cc: Joi.string().min(8).max(10).required(),
  password: Joi.string().min(6).max(1024).required(),
})

module.exports = { schemaRegister, schemaLogin }
