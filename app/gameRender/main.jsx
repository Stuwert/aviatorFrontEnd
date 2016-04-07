import React from 'react';
import ReactDOM from 'react-dom'

//need to import actions and store
import gameStore from './stores/gameStore'
import gameActions from './actions/gameActions'


//importing other react components
import  GameTutorial from './gameTutorial/GameTutorial.jsx'
import  GameLoading from './gameLoading/GameLoading.jsx'
import GamePlay from './gamePlay/GamePlay.jsx'
import  GameEnd from './endGame/GameEnd.jsx'


// setting sockets information
import io from 'socket.io-client'


addEventListener('keydown', function(e){
  e.preventDefault();
  gameActions.addKey(e.keyCode)
})

addEventListener('keyup', function(e){
  gameActions.removeKey(e.keyCode)
})

const currDomain = 'localhost'
const port = '3000'
let socket = io.connect('http://' + currDomain + ':' + port);

export default class SheepGame extends React.Component{
  constructor(props){
    super();
    this.state = {
      game: gameStore.getGame(),
      gameState: gameStore.getGameState()
    };
  }
  componentDidMount(){
    // const currDomain = '192.168.1.148'
    // const port = '3000'


    gameStore.addChangeListener(this.updateGame.bind(this))
    gameStore.addChangeListener(this.updateGameState.bind(this))

    socket.on('verify', function(id){
      //sets the dog information
      gameActions.setId(id)
      socket.emit('joinGame', id)
    })

    socket.on('updateGame', function(newGameObj){
      gameActions.updateGame(newGameObj)
    })

    socket.on('gameStart', function(gameState){
      this.emitKeyInfo();
      gameActions.updateGameState(gameState)
    }.bind(this))

    socket.on('gameEnd', function(gameState){
      gameActions.updateGameState(gameState)
    })

  }
  componentWillUnMount(){
    gameStore.removeChangeListener(this.updateGame);
  }

  updateGame(){
    this.setState({
      game: gameStore.getGame()
    })
  }
  updateGameState(){
    this.setState({
      gameState: gameStore.getGameState()
    })
  }
  emitKeyInfo(){
    let keyInfo = gameStore.getKeysDown()
    socket.emit('keyInfo', keyInfo)
    setInterval(this.emitKeyInfo, 5)
  }
  joinGame(){
    // let dogId = 'e'
    // socket.emit('joinGame', 'testuser', dogId/* DogId is a reference to Store */);
  }
  render(){
    // let returnStatement;
    //
    // switch(this.state.gameState){
    //   case 'gameTutorial':
    //     returnStatement = GameTutorial;
    //     break;
    //   case 'gameLoading':
    //     returnStatement = GameLoading;
    //     break;
    //   case 'gamePlay':
    //     returnStatement = GamePlay;
    //     break;
    //   case 'gameEnd':
    //     returnStatement = GameEnd;
    //     break;
    // }


    return(
      <div className="main">
        <GamePlay game={this.state.game}/>
      </div>
    )
  }
}
