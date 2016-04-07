import Game from '../Game.js'

import GameDispatcher from '../dispatcher/GameDispatcher'
import gameConstants from '../constants/gameConstants'
import objectAssign from 'react/lib/Object.assign'
import {EventEmitter} from 'events'

let CHANGE_EVENT = 'change'

let _store = {
  game: new Game(),
  id: null,
  state: null,
  keysDown: {}
}


let setGameInformation = function(newGameObj){
  _store.game.updateGame(newGameObj)
}

let setGameState = function(newGameState){
  _store.state = newGameState
  _store.game.renderGame(); // - dunno if this actually works
}

let setGameId = function(newGameId){
  _store.id = newGameId;
}

let addKeys = function(keyToAdd){
  _store.keysDown[keyToAdd] = true;
}

let removeKeys = function(keyToRemove){
  delete _store.keysDown[keyToRemove];
}

let gameStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb)
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getGameState : function(){
    return _store.gameState;
  },
  getKeysDown: function(){
    let packagedKeysDown = _store.keysDown;
    packagedKeysDown.dogId = _store.id;
    return packagedKeysDown;
  },
  getGame: function(){
    return _store.game
  }
})

GameDispatcher.register(function(payload){
  let action = payload.action;
  switch(action.actionType){
    case gameConstants.ADD_KEY:
      addKeys(action.data);
      gameStore.emit(CHANGE_EVENT);
      break;
    case gameConstants.REMOVE_KEY:
      removeKeys(action.data);
      gameStore.emit(CHANGE_EVENT);
      break;
    case gameConstants.SET_ID:
      setGameId(action.data);
      gameStore.emit(CHANGE_EVENT);
      break;
    case gameConstants.SET_GAME_STATE:
      setGameState(action.data);
      gameStore.emit(CHANGE_EVENT);
      break;
    case gameConstants.SET_GAME_INFO:
      setGameInformation(action.data);
      gameStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
})

module.exports = gameStore;
