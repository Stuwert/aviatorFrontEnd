import React from 'react'
import {socket} from '../../configinfo'
import gameStore from '../stores/gameStore'
import {Grid, Cell, Button, Card, CardTitle, CardText, CardActions, Tooltip} from 'react-mdl'

export default class GameExample2 extends React.Component {
  handleClick(){
    let id = gameStore.getId();
    socket.emit('joinGame', id)
  }
  render(){
    return(
      <div>
        <Card shadow={0}>
          <CardTitle>
            Tic Tac Toe
          </CardTitle>
          <CardText>
            <p>It's Tic Tac Toe!.</p>
            <img src={require('../../images/css/tic-tac-toe.png')}  width='150'  />
            <Tooltip label="Demo! Link won't work" position="top">
              <CardActions border>
                <Button onClick={this.handleClick} accent ripple raised>Bing Bong!</Button>
              </CardActions>
            </Tooltip>
          </CardText>
        </Card>
      </div>
    )
  }
}
