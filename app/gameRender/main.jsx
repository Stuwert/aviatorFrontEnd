import React from 'react';
// import ReactDOM from 'react-dom';
import Canvas from './canvas.jsx'
import Game from './Game.jsx'
import SheepActive from './gameInformation/SheepActive.jsx'
import SheepLost from './gameInformation/SheepLost.jsx'
import SheepPenned from './gameInformation/SheepPenned.jsx'
import sockets from './sockets.js'


import io from 'socket.io-client'

let currDomain = 'localhost'
let port = '3000'


let socket = io.connect('http://' + currDomain + ':' + port);

let keysDown = {}

addEventListener('keydown', function(e){
  e.preventDefault();
  keysDown[e.keyCode] = true;
  game.setKeysDown(keysDown);
}, false)

addEventListener('keyup', function(e){
  delete keysDown[e.keyCode];
  game.setKeysDown(keysDown);
}, false)

let game;

document.addEventListener("DOMContentLoaded", function(){

  socket.on('verify', function(message){
    // alert(message)
    socket.emit('joinGame', 'testuser');
  })

  socket.on('gameRooms', function(gameRooms){
    console.log(gameRooms);
  })

  socket.on('updateGame', function(information){
    var newUl = document.createElement("ul");
    newUl.innerText = information;
    document.querySelector('ul').appendChild(newUl);
  })

  // document.querySelector('button').addEventListener('click', function(){
  //   var chatVal = document.querySelector('input').value;
  //   socket.emit('updateGame', chatVal);
  // })

  socket.on('gameStart', function(information, sheepNum){

    console.log(information);
    game = new Game(sheepNum);

    let onFire = new Event('gameUpdate');

    game.initializeGame(onFire);

    game.render();
    game.main();

  })

})


export default class SheepGame extends React.Component{
  constructor(){
    super();
    this.state = {
      activeSheep : null,
      lostSheep : null,
      pennedSheep : null
    }
  }
  componentDidMount(){
    addEventListener('gameUpdate', this.updateInformation.bind(this))
  }
  updateInformation(){
    this.setState({
      activeSheep : game.sheepActiveNumber,
      lostSheep : game.sheepLostNumber,
      pennedSheep : game.sheepPennedNumber
    })
  }
  render(){
    return(
      <div className="main">
        <div>
          <Canvas canvas={game.canvas} />
        </div>
        <div>
          <SheepActive number={this.state.activeSheep} />
          <SheepLost number={this.state.lostSheep} />
          <SheepPenned number={this.state.pennedSheep} />
        </div>
      </div>
    )
  }
}
