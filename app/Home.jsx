import React from 'react';
import config from './configinfo'
import {Link} from 'react-router'


export default class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      aircraftType: null,
      flightNumber: null,
      milesFlown: null,
      departureCity: null,
      departureAirport: null,
      departureTime: null,
      estimatedArrivalTime: null,
      arrivalCity: null,
      arrivalAirport: null,
    }
  }
  componentDidMount(){
    var that = this;
    fetch('http://' + config.host + ":" + config.port + "/api/flightinfo", {
      method: 'get'
    }).then(function(response){

      response.json().then(function(data){
        console.log(data);
        that.setState(data)
      })
    })
  }
  render(){
    return(
      <div>
        <h1>{this.state.aircraftType}</h1>
        <ul>
          <li>{this.state.flightNumber}</li>
          <li>{this.state.milesFlown}</li>
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
              <td>{this.state.departureCity}</td>
              <td>{this.state.departureAirport}</td>
              <td>{this.state.departureTime}</td>
              <td>{this.state.arrivalCity}</td>
              <td>{this.state.arrivalAirport}</td>
              <td>{this.state.estimatedArrivalTime}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <Link to="/game">
            <div>
              Games
            </div>
          </Link>
          <Link to="/magazine">
            <div>
              Articles
            </div>
          </Link>
          <Link to="/movies">
            <div>
              Movies
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
