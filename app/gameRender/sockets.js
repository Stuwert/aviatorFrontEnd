import io from 'socket.io-client'

import config from '../configinfo'

module.exports = io.connect('http://' + config.host + ':' + config.port);
