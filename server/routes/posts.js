const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')
const multer = require('multer')
const { storage } = require('../cloudinary')

const parser = multer({ storage })

// create a post
router.post('/', parser.array('image'), async (req, res) => {
  try {
    const post = new Post(req.body)
    post.images = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }))
    await post.save()
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err)
  }
})

// update a post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (req.body.userId === post.userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json('the post has been updated')
    } else {
      res.status(403).json('you can update only your post')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (req.body.userId === post.userId) {
      await post.deleteOne()
      res.status(200).json('the post has been deleted')
    } else {
      res.status(403).json('you can delete only your post')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// like a post
router.put('/:id/like', async (req, res) => {
  try {
    const { userId } = req.body
    const post = await Post.findById(req.params.id)
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } })
      res.status(200).json('the post has been unliked')
    } else {
      await post.updateOne({ $push: { likes: userId } })
      res.status(200).json('the post has been liked')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// get a post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post) {
      res.status(200).json(post)
    } else {
      res.status(404).json('post not found')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// get timeline posts
router.get('/timeline/:id', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.id)
    if (currentUser) {
      const userPosts = await Post.find({ userId: currentUser._id })
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) =>
          Post.find({ userId: friendId })
        )
      )
      res.status(200).json(userPosts.concat(...friendPosts))
    } else {
      res.status(404).json('user not found')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// get user's all posts
router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username })
    if (user) {
      const posts = await Post.find({ userId: user._id })
      res.status(200).json(posts)
    } else {
      res.status(404).json('user not found')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
