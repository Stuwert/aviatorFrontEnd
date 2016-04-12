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
    const node = ReactDOM.findDOMNode(this);

    const addEvent = node.addEventListener || node.attachEvent;

    addEvent('keydown', this.handleKeyPress, false);
    addEvent('keyup', this.handleKeyUp, false);


    gameStore.addChangeListener(this.updateGame.bind(this))
    gameStore.addChangeListener(this.updateGameState.bind(this))
    // gameActions.updateGameState('gameTutorial')

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

    socket.on('gameEnd', function(gameInfo){
      gameActions.updateGameState('gameEnd')
      gameActions.updateGame(gameInfo)
    })

    socket.on('gameCancelled', function(info){
      alert(info);
    })

  }
  componentWillUnmount(){
    const node = ReactDOM.findDOMNode(this);
    const removeEvent = node.removeEventListener || node.detachEvent;
    let keyInfo = gameStore.getKeysDown()
    socket.emit('leaveGame', keyInfo)
    socket.removeListener('verify')
    socket.removeListener('gameLoading')
    socket.removeListener('updateGame')
    socket.removeListener('gameStart')
    socket.removeListener('gameEnd')
    socket.removeListener('gameCancelled')
    removeEvent('keydown', this.handleKeyPress, false);
    removeEvent('keyup', this.handleKeyUp, false);
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
  handleKeyUp(e){
    if (e.keyCode > 36 && e.keyCode < 41){
      e.preventDefault();
      console.log('keyup');
      gameActions.removeKey(e.keyCode);
    }
  }
  handleKeyPress(e){
    if (e.keyCode > 36 && e.keyCode < 41){
      e.preventDefault();
      gameActions.addKey(e.keyCode);
    }
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
        return <GameEnd status={this.state.game.status}/>
        break;
      default:
        return <GameTutorial />
        break;
    }
  }
}
