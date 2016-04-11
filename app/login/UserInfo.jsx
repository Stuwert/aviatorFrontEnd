import React from 'react';
import NavLink from '../NavLink'

export default class Signup extends React.Component{
  render(){
    console.log(this.props.isLoggedIn);
    if(this.props.isLoggedIn){
      return(
        <NavLink to="/logout">Log Out</NavLink>
      )
    }else{
      return (
        <NavLink to="/login">Log In</NavLink>
      )
    }
  }
}
