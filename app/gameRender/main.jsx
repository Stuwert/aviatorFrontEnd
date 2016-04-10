import React from 'react';
import ReactDOM from 'react-dom'

//need to import actions and store
import gameStore from './stores/gameStore'
import gameActions from './actions/gameActions'


//importing other react components
import GameTutorial from './gameTutorial/GameTutorial.jsx'
import GameLoading from './gameLoading/GameLoading.jsx'
import GamePlay from './gamePlay/GamePlay.jsx'
import GameEnd from './gameEnd/GameEnd.jsx'


// setting sockets information
import {socket} from '../configinfo'

addEventListener('keydown', function(e){
  gameActions.addKey(e.keyCode)
})

addEventListener('keyup', function(e){
  gameActions.removeKey(e.keyCode)
})

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
    })

    socket.on('gameLoading', function(gameState){
      gameActions.updateGameState(gameState)
    })

    socket.on('updateGame', function(newGameObj){
      gameActions.updateGame(newGameObj)
    })

    socket.on('gameStart', function(newGameObj, gameState){
      this.emitKeyInfo();
      gameActions.updateGame(newGameObj)
      gameActions.updateGameState(gameState)
    }.bind(this))

    socket.on('gameEnd', function(gameState, gameInfo){
      gameActions.updateGameState(gameState)
      gameActions.updateGame(gameInfo)
    })

  }
  componentWillUnMount(){
    gameStore.removeChangeListener(this.updateGame.bind(this));
    gameStore.removeChangeListener(this.updateGameState.bind(this));
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
  render(){
    let returnStatement;

    switch(this.state.gameState){
      case 'gameTutorial':
        return <GameTutorial />
        break;
      case 'gameLoading':
        return <GameLoading />
        break;
      case 'gamePlay':
        return <GamePlay game={this.state.game} />
        break;
      case 'gameEnd':
        return <GameEnd />
        break;
      default:
        return <GameTutorial />;
        break;
    }
  }
}
