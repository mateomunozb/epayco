const router = require('express').Router()
const { Product, User } = require('../database/db')
const { schemaProduct } = require('../database/models/validate')

router.post('/products', async (req, res) => {
  const user = await User.findById({ _id: req.user.id }, { password: 0 })
  const { error } = schemaProduct.validate(req.body)

  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }

  const { productName, description, subtotal, descuento } = req.body

  const product = new Product({
    productName,
    description,
    email: user.email,
    subtotal: subtotal,
    descuento: descuento ? descuento : 0,
    total: subtotal - descuento,
    status: 'Pendiente',
  })

  const userProduct = {
    product,
  }

  try {
    const productDB = await product.save()
    const updateUser = await User.updateOne({ _id: user._id }, { $push: { products: userProduct } })
    res.json({
      message: 'Factura de producto generada',
    })
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
