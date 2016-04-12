import Canvas from './Canvas.jsx'
import SideBar from './gameInformation/SideBar.jsx'
import React from 'react'
import {Grid, Cell} from 'react-mdl'

export default class GamePlay extends React.Component {
  render(){
    return (
      <Grid>
        <Cell col={9}>
          <Canvas game={this.props.game} />
        </Cell>
        <Cell col={3}>
          <SideBar status={this.props.game.status} />
        </Cell>
      </Grid>
    )
  }
}
