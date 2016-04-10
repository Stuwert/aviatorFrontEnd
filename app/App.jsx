import React from 'react'
import NavLink from './NavLink'

//add socket request for help


export default class App extends React.Component{
  render(){
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Sign-up</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/game">Games</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
          <li><NavLink to="/food">Food</NavLink></li>
          <li><NavLink to="/articles">Articles</NavLink></li>
          <li><NavLink to="/safety">Safety Information</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
