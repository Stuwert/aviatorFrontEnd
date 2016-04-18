//contains keyDown to start game
// emits a socket that joinsGame

import React from 'react'
import {socket} from '../../configinfo'
import gameStore from '../stores/gameStore'
import {Grid, Cell, Button, Card, CardTitle, CardText, CardActions, Tooltip} from 'react-mdl'
import GameExample1 from './GameExample1'
import GameExample2 from './GameExample2'


export default class GameTutorial extends React.Component {
  handleClick(){
    let id = gameStore.getId();
    socket.emit('joinGame', id)
  }
  render(){
    return(
      <div>
        <Grid>
          <h2>Games</h2>
        </Grid>
        <Grid>
          <Cell col={4}>
            <Card shadow={0}>
              <CardTitle>
                Muahahah...Baaaaaah
              </CardTitle>
              <CardText>
                <p>Welcome to Muahahah...Baaah, the collaborative sheep herding game.</p>
                <p>Yourself, and another passenger, will try to herd as many sheep into the pen as you can.</p>
                <p>But be careful!  The sheep will try to escape from you!  And if they get to the edge of the gras, they're lost forever!</p>
                <p>Pen as many as you can before it's too late!</p>
                <p>Your arrow keys will move the dog and the sheep will move towards the pen if you are near.</p>
                <img src={require('../../images/css/DogGame.gif')}  height='200' width='350' />
                <CardActions border>
                  <Tooltip label="Requires two players!" large={true} position="top">
                    <Button onClick={this.handleClick} accent ripple raised>I'm Ready!</Button>
                  </Tooltip>
                  </CardActions>
              </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <GameExample1 />
          </Cell>
          <Cell col={4}>
            <GameExample2 />
          </Cell>
        </Grid>
      </div>
    )
  }
}
