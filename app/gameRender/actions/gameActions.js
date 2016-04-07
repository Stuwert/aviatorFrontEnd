import GameDispatcher from '../dispatcher/GameDispatcher'
import gameConstants from '../constants/gameConstants'


let gameActions = {
  addKey: function(key) {
    GameDispatcher.handleAction({
      actionType: gameConstants.ADD_KEY,
      data: key
    })
  },
  removeKey: function(key) {
    GameDispatcher.handleAction({
      actionType: gameConstants.REMOVE_KEY,
      data: key
    })
  },
  setId: function(id) {
    GameDispatcher.handleAction({
      actionType: gameConstants.SET_ID,
      data: id
    })
  },
  updateGameState: function(gameState) {
    GameDispatcher.handleAction({
      actionType: gameConstants.SET_GAME_STATE,
      data: gameState
    })
  },
  updateGame: function(gameInfo) {
    GameDispatcher.handleAction({
      actionType: gameConstants.SET_GAME_INFO,
      data: gameInfo
    })
  }
}


module.exports = gameActions;