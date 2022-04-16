const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const helmet = require('helmet')
const dotenv = require('dotenv')
const cors = require('cors')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config()

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('Connecting to MongoDB')
})
mongoose.connection.on('error', (err) => {
  console.log(err)
})

//middleware
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/posts', postRoute)

const port = 8800
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`)
})
