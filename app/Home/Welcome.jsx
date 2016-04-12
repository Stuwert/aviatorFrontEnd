import React from 'react'
import {Card, CardTitle, CardActions, CardText} from 'react-mdl'


export default class Welcome extends React.Component{
  render(){
    return(
      <Card shadow={2} style={{width: '100%', margin: 'auto'}} className="mdl-color--accent ">
        <CardTitle>
          Welcome to Aviator
        </CardTitle>
        <CardText>
          <p>Aviator is your personal portal during this flight.</p>
          <p>Enjoy our movies, articles, and games.</p>
          <p>If you log in with your mileage account, you can order food and contact flight attendants from your computer!</p>
        </CardText>
      </Card>
    )
  }
}
