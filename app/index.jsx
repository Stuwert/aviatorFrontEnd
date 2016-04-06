// require('./main.css')

import React from 'react';
import ReactDOM from 'react-dom';
import SheepGame from './gameRender/main';

import Game from './gameRender/Game.js'


import io from 'socket.io-client'

let currDomain = 'localhost'
let port = '3000'


let socket = io.connect('http://' + currDomain + ':' + port);


// Define new event and game communication objects
let onFire = new Event('gameUpdate');

let keysDown = {}
let game = new Game();

addEventListener('keydown', function(e){
  e.preventDefault();
  keysDown[e.keyCode] = true;
}, false)

addEventListener('keyup', function(e){
  delete keysDown[e.keyCode];
}, false)

var StartGame = React.createClass({
  startEmitting: function(){
    socket.emit('keyInformation', keysDown)
  },
  render: function(){
    return (
      <button onClick={this.startEmitting}>Start Emitting</button>
    )
  }
})


document.addEventListener("DOMContentLoaded", function(){

  socket.on('verify', function(message){

    socket.emit('joinGame', 'testuser');
  })

  socket.on('gameRooms', function(gameRooms){
    console.log(gameRooms);
  })

  socket.on('updateGame', function(newGameObj){
    game.updateGame(gameObj)
    socket.emit('keyInformation', keysDown)
  })

  socket.on('gameStart', function(gameObj){
    game.updateGame(gameObj);
    console.log(game);
    // socket.emit('updateGame', keysDown);
    // ReactDOM.render(
    //   <SheepGame game={gameObj} />,
    //   document.querySelector('#app')
    // )
  })

})
