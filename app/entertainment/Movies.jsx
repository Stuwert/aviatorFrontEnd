import React from 'react';
import config from '../configinfo'
import {Link} from 'react-router'

export default class Movies extends React.Component{

  constructor(){
    super();
    this.state = {
      movies : []
    }
  }
  componentDidMount(){
    var that = this;
    fetch(config.config + "/api/movies", {
      method: 'get'
    }).then(function(response){

      response.json().then(function(data){
        var newMovies = data.map(function(movie){
          return movie;
        })
        that.setState({movies: newMovies})
      })
    })
  }
  render(){
    var movies = this.state.movies.map(function(movie){
      return (
        <div key={movie._id}>
          <Link to={`/movies/${movie.title}`}>
            <h2>{movie.title}</h2>
          </Link>
            <p>{movie.imageUrl}</p>
            <p>{movie.price}</p>
            <p>{movie.blurb}</p>
        </div>
      )
    })
    return(
      <div>
        {movies}
      </div>
    )
  }
}
