const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dilh6ijxi',
  api_key: process.env.CLOUDINARY_KEY || '615761679825586',
  api_secret: process.env.CLOUDINARY_SECRET || '-l3rWTXp-2HMqqtfAFYNd0fcUns',
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'social-media',
    allowedFormats: ['png', 'jpg', 'jpeg'],
  },
})

module.exports = {
  cloudinary,
  storage,
}
