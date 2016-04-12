import React from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, List, ListItem, ListItemContent} from 'react-mdl'
import gameActions from '../actions/gameActions'

export default class GameEnd extends React.Component {
  restartGame(){
    gameActions.updateGameState('gameTutorial')
  }
  render(){
    return (
      <Grid>
        <Cell col={12}>
          <Card shadow={5} style={{width: '600px'}}>
            <CardTitle id='endGame' style={{height: '450px'}}>
              Game Over!
            </CardTitle>
            <CardText>
              <p>Your Final Score</p>
                <List>
                  <ListItem twoLine>
                    <ListItemContent subtitle={'Sheep Lost'}>{this.props.status.sheepLost}</ListItemContent>
                  </ListItem>
                  <ListItem twoLine>
                    <ListItemContent subtitle={'Sheep Saved'}>{this.props.status.sheepPenned}</ListItemContent>
                  </ListItem>
                </List>
            </CardText>
            <CardActions>
              <Button onClick={this.restartGame}>Back to Games</Button>
            </CardActions>
          </Card>
        </Cell>
      </Grid>
    )
  }
}
