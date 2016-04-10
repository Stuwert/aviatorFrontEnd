import io from 'socket.io-client'

module.exports = {
  host: 'localhost',
  port: '3000',
  socket: io.connect('http://localhost:3000')
}
