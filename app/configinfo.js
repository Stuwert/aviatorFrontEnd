import io from 'socket.io-client'

let link = 'http://localhost:3000'

module.exports = {
  config: link,
  socket: io.connect(link)
}
