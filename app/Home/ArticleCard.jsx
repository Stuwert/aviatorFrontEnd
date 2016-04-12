import React from 'react';
import {Link} from 'react-router'
import {Card, CardTitle, CardActions, CardText, Button} from 'react-mdl'


export default class ArticleCard extends React.Component{
  render(){
    return (
      <Card shadow={5}>
        <CardTitle expand id="articleBackground">
          Your Inflight Magazine
        </CardTitle>
        <CardText>
          Want to read on your phone?
        </CardText>
        <CardActions border>
          <Link to="/articles" className="mdl-button mdl-color--secondary mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Now you can
          </Link>
        </CardActions>
      </Card>
      
    )
  }
}
