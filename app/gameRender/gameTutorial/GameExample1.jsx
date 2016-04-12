import React from 'react'
import {socket} from '../../configinfo'
import gameStore from '../stores/gameStore'
import {Grid, Cell, Button, Card, CardTitle, CardText, CardActions} from 'react-mdl'

export default class GameExample1 extends React.Component {
  handleClick(){
    let id = gameStore.getId();
    socket.emit('joinGame', id)
  }
  render(){
    return(
      <div>
        <Card shadow={0}>
          <CardTitle>
            Chess
          </CardTitle>
          <CardText>
            <p>It's Chess.</p>
            <img src={require('../../images/css/chess.jpg')} width='150' />
            <CardActions border>
              <Button onClick={this.handleClick} accent ripple raised>Play!</Button>
            </CardActions>
          </CardText>
        </Card>
      </div>
    )
  }
}
