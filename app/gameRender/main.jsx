import React from 'react';
import ReactDOM from 'react-dom'

//need to import actions and store
import gameStore from './stores/gameStore'
import gameActions from './actions/gameActions'


//importing other react components
// import  GameTutorial from './gameTutorial/GameTutorial.jsx'
// import  GameLoading from './gameLoading/GameLoading.jsx'
import GamePlay from './gamePlay/GamePlay.jsx'
// import  EndScreen from './endGame/EndGame.jsx'


// setting sockets information
import io from 'socket.io-client'


addEventListener('keydown', function(e){
  //gameAction.addKey(e.keyCode)
})

addEventListener('keyup', function(e){
  //gameAction.removeKey(e.keyCode)
})

export default class SheepGame extends React.Component{
  constructor(){
    super();
    this.state = {
      game: gameStore.getGame(),
      gameState: gameStore.getGameState()
    };
  }
  componentDidMount(){
    // const currDomain = '192.168.1.148'
    // const port = '3000'
    const currDomain = 'localhost'
    const port = '3000'

    var socket = io.connect('http://' + currDomain + ':' + port);

    gameStore.addChangeListener(this.updateGame.bind(this))
    gameStore.addChangeListener(this.updateGameState.bind(this))

    socket.on('verify', function(id){
      //sets the dog information
      gameAction.setGameId(id)
    })

    socket.on('updateGame', function(newGameObj){
      gameAction.updateGame(newGameObj)
    })

    socket.on('gameStart', function(gameState){
      this.emitKeyInfo();
      gameAction.updateGameState(gameState)
    })

    socket.on('gameEnd', function(gameState){
      gameAction.updateGameState(gameState)
    })

  }
  componentWillUnMount(){
    gameStore.removeChangeListener(this.updateGame);
  }

  updateGame(){
    this.setState({
      game: gameStore.getGameInformation()
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
    if(this.state.gameState === 'gamePlay'){
      setInterval(this.emitKeyInfo, 5)
    }
  }
  joinGame(){
    // let dogId = 'e'
    // socket.emit('joinGame', 'testuser', dogId/* DogId is a reference to Store */);
  }
  render(){
    let returnStatement;

    switch(this.state.gameState){
      case 'gameTutorial':
        returnStatement = GameTutorial;
        break;
      case 'gameLoading':
        returnStatement = GameLoading;
        break;
      case 'gamePlay':
        returnStatement = GamePlay;
        break;
      case 'gameEnd':
        returnStatement = GameEnd;
        break;
    }


    return(
      <div className="main">
        {returnStatement}
      </div>
    )
  }
}
