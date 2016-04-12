import React from 'react'
import {Grid, Spinner, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl'

export default class GameLoading extends React.Component {
  render(){
    return (
      <Grid>
        <Cell col={12}>
          <Card shadow={5} style={{width: '600px'}}>
            <CardTitle>
              <img src={require('../../images/css/find-sheep-dog.jpg')} height='200'/>
              <img src={require('../../images/css/lost-sheep.jpg')} height='200' />
            </CardTitle>
            <CardText>
              <h4>Just one sec!</h4>
              <p>We're finding another sheepdog</p>
              <p>To help you herd those lost sheep</p>
            </CardText>
            <CardActions>
              <Spinner />
              <Spinner />
              <Spinner />
            </CardActions>
          </Card>
        </Cell>
      </Grid>
    )
  }
}
