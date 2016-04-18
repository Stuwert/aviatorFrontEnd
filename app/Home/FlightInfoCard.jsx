import React from 'react'
import {Card, CardTitle, CardActions, CardText, Button, Tooltip} from 'react-mdl'

export default class FlightInfoCard extends React.Component{
  render(){
    return(
      <Card id="flightInfo" shadow={2} style={{width: '100%', margin: 'auto'}}>
        <CardTitle >
          Flight#: {this.props.info.flightNumber}
        </CardTitle>
        <CardText>
          <h3>Departure City: {this.props.info.departureCity} <strong>{this.props.info.departureAirport}</strong></h3>
          <h3>Arrival City: {this.props.info.arrivalCity} <strong>{this.props.info.arrivalAirport}</strong></h3>
        </CardText>
        <CardActions border>
          <Tooltip label="Demo! Link won't work" position="top">
            <Button colored>
              More Info
            </Button>
          </Tooltip>
        </CardActions>
      </Card>
    )
  }
}
