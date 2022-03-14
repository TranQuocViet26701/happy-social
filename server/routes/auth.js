const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      username,
      email,
      password: hashedPassword,
    })

    await user.save()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    !user && res.status(404).json('user not found')

    const validPassword = await bcrypt.compare(password, user.password)
    !validPassword && res.status(400).json('wrong password')

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
