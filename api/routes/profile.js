const router = require('express').Router()
const { User } = require('../database/db')

router.get('/', async (req, res) => {
  const user = await User.findById({ _id: req.user.id }, { password: 0 })

  res.json({
    user,
  })
})

module.exports = router
