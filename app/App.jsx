import React from 'react'
import NavLink from './NavLink'

export default class App extends React.Component{
  render(){
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/game">Games</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
          <li><NavLink to="/food">Food</NavLink></li>
          <li><NavLink to="/magazine">Magazine</NavLink></li>
          <li><NavLink to="/safety">Safety Information</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
