import Canvas from './Canvas.jsx'
import SideBar from './gameInformation/SideBar.jsx'
import React from 'react'

export default class GamePlay extends React.Component {
  render(){
    return (
      <div>
        <Canvas game={this.props.game} />
        <SideBar status={this.props.game.status} />
      </div>
    )
  }
}
