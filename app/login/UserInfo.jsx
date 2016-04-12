import React from 'react';
import NavLink from '../NavLink'

export default class Signup extends React.Component{
  render(){
    if(this.props.isLoggedIn){
      return(
        <div>
          <NavLink className="mdl-navigation__link" to='/food'>Food</NavLink>
          <NavLink className="mdl-navigation__link" to='/help'>Help</NavLink>
          <NavLink className="mdl-navigation__link" to="/logout">Log Out</NavLink>
        </div>
      )
    }else{
      return (
        <NavLink className="mdl-navigation__link" to="/login">Log In</NavLink>
      )
    }
  }
}
