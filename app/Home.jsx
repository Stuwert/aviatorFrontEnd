import React from 'react';
import config from './configinfo'
import {Link} from 'react-router'
import Login from './login/Login.jsx'
import $ from 'jquery'

//import cards
import ArticleCard from './Home/ArticleCard'
import GameCard from './Home/GameCard'
import MovieCard from './Home/MovieCard'
import FlightInfoCard from './Home/FlightInfoCard'

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
          <div className="mdl-cell mdl-cell--6-col"></div>
          <FlightInfoCard info={this.state} />
          <GameCard />
          <MovieCard />
          <ArticleCard />
      </div>

    )
  }
}
