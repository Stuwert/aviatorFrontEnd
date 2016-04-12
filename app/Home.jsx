import React from 'react';
import config from './configinfo'
import {Link} from 'react-router'
import Login from './login/Login.jsx'
import $ from 'jquery'
import {Grid, Cell} from 'react-mdl'
// import UserStore from '../flux/stores/userStore'

//import cards
import ArticleCard from './Home/ArticleCard'
import GameCard from './Home/GameCard'
import MovieCard from './Home/MovieCard'
import FlightInfoCard from './Home/FlightInfoCard'
import Welcome from './Home/Welcome'
import Hello from './Home/Hello'


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
    // {userStore.getUser().exists ? <Hello /> : <Welcome />}
    return(
      <div>
        <Grid>
          <Cell col={6}>
            <Welcome />
          </Cell>
          <Cell col={6}>
            <FlightInfoCard info={this.state} />
          </Cell>
        </Grid>
        <Grid>
          <Cell col={4}><GameCard /></Cell>
          <Cell col={4}><MovieCard /></Cell>
          <Cell col={4}><ArticleCard /></Cell>
        </Grid>
      </div>
    )
  }
}
