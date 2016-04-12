import React from 'react'

export default class FlightInfoCard extends React.Component{
  render(){
    return(
      <div className="mdl-cell mdl-cell--6-col">
        <h1>{this.props.info.aircraftType}</h1>
        <ul>
          <li>{this.props.info.flightNumber}</li>
          <li>{this.props.info.milesFlown}</li>
        </ul>
        <table>
          <thead>
            <tr>
              <th>Departure City</th>
              <th>Departure Airport</th>
              <th>Departure Time</th>
              <th>Arrival City</th>
              <th>Arrival Airport</th>
              <th>ArrivalTime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.info.departureCity}</td>
              <td>{this.props.info.departureAirport}</td>
              <td>{this.props.info.departureTime}</td>
              <td>{this.props.info.arrivalCity}</td>
              <td>{this.props.info.arrivalAirport}</td>
              <td>{this.props.info.estimatedArrivalTime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
