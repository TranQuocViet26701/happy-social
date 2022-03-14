const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

// update user
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    if (req.body.userId === id || req.body.isAdmin) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword
      }

      await User.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).json('account has been updated')
    } else {
      res.status(403).json('you can update only your account')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// delete user
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    if (req.body.userId === id || req.body.isAdmin) {
      await User.findByIdAndDelete(id)
      res.status(200).json('account has been deleted')
    } else {
      res.status(403).json('you can delete only your account')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// get a user
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      const { password, isAdmin, ...other } = user._doc
      res.status(200).json(other)
    } else {
      res.status(404).json('user not found')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// follow a user
router.put('/:id/follow', async (req, res) => {
  try {
    const { userId } = req.body
    const { id } = req.params
    if (userId !== id) {
      const user = await User.findById(id)
      const currentUser = await User.findById(userId)

      if (!user.followers.includes(userId)) {
        await user.updateOne({ $push: { followers: userId } })
        await currentUser.updateOne({ $push: { followings: id } })
        res.status(200).json('user has been followed')
      } else {
        res.status(403).json('you have already followed this user')
      }
    } else {
      res.status(403).json('you cannot follow yourself')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// unfollow a user
router.put('/:id/unfollow', async (req, res) => {
  try {
    const { userId } = req.body
    const { id } = req.params
    if (userId !== id) {
      const user = await User.findById(id)
      const currentUser = await User.findById(userId)

      if (user.followers.includes(userId)) {
        await user.updateOne({ $pull: { followers: userId } })
        await currentUser.updateOne({ $pull: { followings: id } })
        res.status(200).json('user has been unfollowed')
      } else {
        res.status(403).json('you dont follow this user')
      }
    } else {
      res.status(403).json('you cannot unfollow yourself')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
