const Joi = require('joi')

const schemaRegister = Joi.object({
  cc: Joi.number().min(10000000).max(9999999999).required().integer(),
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  phone: Joi.number().min(1000000).max(9999999999).required(),
  password: Joi.string().min(6).max(1024).required(),
})

const schemaLogin = Joi.object({
  cc: Joi.number().min(10000000).max(9999999999).required().integer(),
  password: Joi.string().min(6).max(1024).required(),
})

module.exports = { schemaRegister, schemaLogin }
