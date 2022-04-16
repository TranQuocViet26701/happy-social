const mongoose = require('mongoose')
const { Schema } = mongoose

const ImageUrl = new Schema({
  url: String,
  filename: String,
})

const postSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      max: 500,
    },
    images: {
      type: [ImageUrl],
      default: [],
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', postSchema)
