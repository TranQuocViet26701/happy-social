const io = require('socket.io')(8900, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

let users = []

const addUser = (socketId, userId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({
      socketId,
      userId,
    })
}

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId)
}

const getUser = (userId) => {
  return users.find((user) => user.userId === userId)
}

io.on('connection', (socket) => {
  //when connect
  console.log('a user connected')

  // take userId and socketId from user
  socket.on('addUser', (userId) => {
    addUser(socket.id, userId)
    io.emit('getUsers', users)
  })

  // send and get message
  socket.on('sendMessage', ({ _id, senderId, receiverId, text }) => {
    const user = getUser(receiverId)

    io.to(user.socketId).emit('getMessage', {
      _id,
      senderId,
      text,
    })
  })

  // when disconnect
  socket.on('disconnect', () => {
    console.log('user disconnected')
    removeUser(socket.id)
    io.emit('getUsers', users)
  })
})
