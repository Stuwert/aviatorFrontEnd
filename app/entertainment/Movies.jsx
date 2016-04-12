import React from 'react';
import config from '../configinfo'
import {Link} from 'react-router'
import {Card, CardTitle, CardActions, CardText, Button, Grid, Cell} from 'react-mdl'

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
        <Cell col={12} key={movie._id}>
          <Card shadow={0} style={{width: '100%'}}>
            <CardTitle style={{height: '65%', background: `url(${movie.imageUrl})`}}>
              <Link to={`/movies/${movie.title}`}>
                {movie.title}
              </Link>
            </CardTitle>
            <CardText>
              <tr>
                <td>
                  <p>Price: {movie.price === 0 ? 'Free' : movie.price}</p>
                </td>
                <td>
                  <p>{movie.blurb}</p>
                </td>
              </tr>
            </CardText>
          </Card>
        </Cell>
      )
    })
    return(
      <Grid>
        {movies}
      </Grid>
    )
  }
}
