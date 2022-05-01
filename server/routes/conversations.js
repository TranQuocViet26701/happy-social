const express = require('express')
const router = express.Router()
const Conversation = require('../models/Conversation')

// new conversation
router.post('/', async (req, res) => {
  const newConversation = new Conversation(req.body)

  try {
    const result = await newConversation.save()
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

// get a specific conversation
router.get('/', async (req, res) => {
  try {
    const conversation = await Conversation.findById(req.query.conversationId)
    res.status(200).json(conversation)
  } catch (err) {
    res.status(500).json(err)
  }
})

// get all conversations of a user
router.get('/:userId', async (req, res) => {
  try {
    const conversations = await Conversation.find({
      members: {
        $in: [req.params.userId],
      },
    })
    res.status(200).json(conversations)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
