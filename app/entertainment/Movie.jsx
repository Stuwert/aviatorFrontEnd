import React from 'react';
import config from '../configinfo'
import {Link} from 'react-router'

export default class Movie extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: null,
      price: null,
      runTime: null,
      blurb: null,
      imageUrl: null,
      actors: [],
      releaseYear: null,
      genre: null
    }
  }
  componentDidMount(){
    var that = this;
    fetch(config.config + "/api/movies/" + this.props.params.name, {
      method: 'get'
    }).then(function(response){

      response.json().then(function(data){
        that.setState(data)
      })
    })
  }
  render(){
    var actors = this.state.actors.map(function(actor, i){
      return <li key={i}>{actor}</li>
    })
    return(
      <div>
        <h2>{this.state.title}</h2>
        <div>{this.state.imageUrl}</div>
        <ul>
          <li>{this.state.price}</li>
          <li>{this.state.releaseYear}</li>
          <li>{this.state.genre}</li>
          <li>{this.state.runTime}</li>
        </ul>
        <ul>
          {actors}
        </ul>
        <p>{this.state.blurb}</p>
      </div>
    )
  }
}
