const Joi = require('joi')

const schemaRegister = Joi.object({
  cc: Joi.string().min(8).max(10).required().messages({
    'string.empty': `Número de documento requerido`,
    'string.min': `Número de documento debe tener mínimo {#limit} digitos`,
    'string.max': `Número de documento debe tener máximo {#limit} digitos`,
    'any.required': `Numero de documento requerido`,
  }),
  name: Joi.string().min(3).max(255).required().messages({
    'string.empty': `Nombre requerido`,
    'string.min': `Nombre debe tener mínimo {#limit} digitos`,
    'string.max': `Nombre debe tener máximo {#limit} digitos`,
    'any.required': `Nombre requerido`,
  }),
  email: Joi.string()
    .min(6)
    .max(255)
    .required()
    .messages({
      'string.empty': `Email requerido`,
      'string.min': `Email debe tener mínimo {#limit} digitos`,
      'string.max': `Email debe tener máximo {#limit} digitos`,
      'any.required': `Email requerido`,
    })
    .email(),
  phone: Joi.string().min(7).max(10).required().messages({
    'string.empty': `Teléfono requerido`,
    'string.min': `Teléfono debe tener mínimo {#limit} digitos`,
    'string.max': `Teléfono debe tener máximo {#limit} digitos`,
    'any.required': `Teléfono requerido`,
  }),
  password: Joi.string().min(6).max(1024).required().messages({
    'string.empty': `Contraseña requerido`,
    'string.min': `Contraseña debe tener mínimo {#limit} digitos`,
    'string.max': `Contraseña debe tener máximo {#limit} digitos`,
    'any.required': `Contraseña requerido`,
  }),
})

const schemaProduct = Joi.object({
  productName: Joi.string().required().messages({
    'string.empty': `Nombre de producto requerido`,
    'any.required': `Nombre de producto requerido`,
  }),
  description: Joi.string().allow('').optional(),
  subtotal: Joi.string().required().allow('').messages({
    'string.empty': `Valor de producto requerido`,
    'any.required': `Nombre de producto requerido`,
  }),
  descuento: Joi.optional(),
})

module.exports = { schemaRegister, schemaProduct }
