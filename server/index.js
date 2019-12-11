const app = require('express')
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(8081)

io.on('connection', function (socket) {
  console.log('Client Connected')
  socket.on('close', function () {
    console.log('Client Disconnected')
  })
  socket.on('compose', ({displayName, message, time}) => {
    console.log(`(${displayName}): ${message} @${time}`)
    io.sockets.emit('message', {
      displayName, message, time
    })
  })
})