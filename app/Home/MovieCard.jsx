import React from 'react';
import {Link} from 'react-router'
import {Card, CardTitle, CardActions, CardText, Button} from 'react-mdl'


export default class MovieCard extends React.Component{
  render(){
    return (
      <Card shadow={5}>
        <CardTitle expand id="movieBackground">
          Netflix without the Chill
        </CardTitle>
        <CardText>
          New Releases, Old Classics, and More!
        </CardText>
        <CardActions border>
          <Link to="/movies" className="mdl-button mdl-color--secondary mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Start Viewing!
          </Link>
        </CardActions>
      </Card>
    )
  }
}
