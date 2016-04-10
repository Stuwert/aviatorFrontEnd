//contains keyDown to start game
// emits a socket that joinsGame

import React from 'react'
import {socket} from '../../configinfo'
import gameStore from '../stores/gameStore'

export default class GameTutorial {
  handleClick(){
    let id = gameStore.getId();
    socket.emit('joinGame', id)
  }
  render(){
    return(
      <div>
        <h1>This is a Game Tutorial</h1>
        <button onClick={this.handleClick}>Start Game</button>
      </div>
    )
  }
}
