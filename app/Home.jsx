import React from 'react';
import config from './configinfo'
import {Link} from 'react-router'
import Login from './login/Login.jsx'
import $ from 'jquery'

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
    $.ajax(config.config + "/api/flightinfo", {
      method: 'get'
    }).done(function(data){
      console.log(data);
      this.setState(data)
    }.bind(this))
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
          <Link to="/articles">
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
