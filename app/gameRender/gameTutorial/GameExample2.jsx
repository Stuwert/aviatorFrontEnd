import React from 'react'
import {socket} from '../../configinfo'
import gameStore from '../stores/gameStore'
import {Grid, Cell, Button, Card, CardTitle, CardText, CardActions} from 'react-mdl'

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
            <CardActions border>
              <Button onClick={this.handleClick} accent ripple raised>Bing Bong!</Button>
            </CardActions>
          </CardText>
        </Card>
      </div>
    )
  }
}
