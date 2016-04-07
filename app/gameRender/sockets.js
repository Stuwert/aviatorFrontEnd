import io from 'socket.io-client'


const currDomain = 'localhost'
const port = '3000'
module.exports = io.connect('http://' + currDomain + ':' + port);
