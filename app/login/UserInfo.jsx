import React from 'react';
import NavLink from '../NavLink'

export default class Signup extends React.Component{
  render(){
    if(this.props.isLoggedIn){
      return(
        <div>
          <NavLink to='/food'>Food</NavLink>
          <NavLink to='/help'>Help</NavLink>
          <NavLink to="/logout">Log Out</NavLink>
        </div>
      )
    }else{
      return (
        <NavLink to="/login">Log In</NavLink>
      )
    }
  }
}
