import React from 'react';


//importing other react components
import Canvas from './canvas.jsx'
import SideBar from './gameInformation/SideBar.jsx'


import Game from './Game.js'


// setting sockets information
import io from 'socket.io-client'

// const currDomain = '192.168.1.148'
// const port = '3000'
const currDomain = 'localhost'
const port = '3000'


let socket = io.connect('http://' + currDomain + ':' + port);

// Define new event and game communication objects
let gameUpdate = new Event('gameUpdate');


//defining game interaction
let keysDown = {
  dogId: null
}

let game = new Game();

addEventListener('keydown', function(e){
  e.preventDefault();
  keysDown[e.keyCode] = true;
}, false)

addEventListener('keyup', function(e){
  delete keysDown[e.keyCode];
}, false)


document.addEventListener("DOMContentLoaded", function(){


  socket.on('verify', function(num){
    game.setId(num)
    keysDown.dogId = num;
    socket.emit('joinGame', 'testuser', keysDown.dogId);
  })

  socket.on('gameRooms', function(gameRooms){
    console.log(gameRooms);
  })

  socket.on('updateGame', function(newGameObj){
    game.updateGame(newGameObj)
    socket.emit('keyInformation', keysDown)
    dispatchEvent(gameUpdate);
  })

  socket.on('gameStart', function(gameObj){
    game.updateGame(gameObj);
    dispatchEvent(gameUpdate);
    setInterval(sendKeyInfo, 5)
  })

})

function sendKeyInfo(){
  socket.emit('keyInfo', keysDown);
}

export default class SheepGame extends React.Component{
  constructor(){
    super();
    this.state = {
      game: game
    };
  }
  componentDidMount(){
    addEventListener('gameUpdate', this.updateGame.bind(this))
  }
  updateGame(){
    game.renderGame();
    this.setState({
      game: game
    })
  }
  render(){
    return(
      <div className="main">
        <Canvas game={this.state.game} />
        <SideBar status={this.state.game.status} />
      </div>
    )
  }
}
