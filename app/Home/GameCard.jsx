import React from 'react';
import {Link} from 'react-router'
import {Card, CardTitle, CardActions, CardText, Button} from 'react-mdl'

export default class GameCard extends React.Component{
  render(){
    return (
      <Card shadow={5}>
        <CardTitle expand id="gameBackground">
          Get in the Game
        </CardTitle>
        <CardText>
          Play by yourself or with fellow passengers!
        </CardText>
        <CardActions border>
          <Link to="/game" className="mdl-button mdl-color--secondary mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Play!
          </Link>
        </CardActions>
      </Card>
    )
  }
}
