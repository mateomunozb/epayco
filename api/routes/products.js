const router = require('express').Router()
const { Product, User } = require('../database/db')

router.post('/products', async (req, res) => {
  const user = await User.findById({ _id: req.user.id }, { password: 0 })

  const { productName, description, subtotal, descuento } = req.body

  const product = new Product({
    productName,
    description,
    email: user.email,
    subtotal,
    descuento,
    total: subtotal - descuento,
    status: 'Pendiente',
  })

  const userProduct = {
    productName,
    total: product.total,
    status: product.status,
  }

  try {
    const productDB = await product.save()
    const updateUser = await User.updateOne(
      { _id: user._id },
      { $push: { products: userProduct } }
    )
    res.json({
      data: productDB,
      message: 'Factura de producto generada',
    })
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
