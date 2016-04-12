import React from 'react';
import config from './configinfo'
import {Link} from 'react-router'
import Login from './login/Login.jsx'
import $ from 'jquery'
import {Grid, Cell} from 'react-mdl'
import UserStore from './flux/stores/userStore'

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
    return(
      <div>
        <Grid>
          <Cell phone={12} tablet={12} col={6}>
            {UserStore.getUser().userExists ? <Hello /> : <Welcome />}
          </Cell>
          <Cell phone={12} tablet={12} col={6}>
            <FlightInfoCard info={this.state} />
          </Cell>
        </Grid>
        <Grid>
          <Cell phone={6} col={4}><GameCard /></Cell>
          <Cell phone={6} col={4}><MovieCard /></Cell>
          <Cell align={'middle'} phone={6} col={4}><ArticleCard /></Cell>
        </Grid>
      </div>
    )
  }
}
