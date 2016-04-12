import React from 'react'
import {Card, CardTitle, CardActions, CardText} from 'react-mdl'

export default class FlightInfoCard extends React.Component{
  render(){
    return(
      <Card shadow={2} style={{width: '100%', margin: 'auto'}}>
        <CardTitle style={{background: 'url(../images/css/background-home.jpg))'}}>
          Flight#: {this.props.info.flightNumber}
        </CardTitle>
        <CardText>
          <h3>Departure City: {this.props.info.departureCity} <strong>{this.props.info.departureAirport}</strong></h3>
          <h3>Arrival City: {this.props.info.arrivalCity} <strong>{this.props.info.arrivalAirport}</strong></h3>
        </CardText>
        <CardActions border>
          More Information
        </CardActions>
      </Card>
    )
  }
}
