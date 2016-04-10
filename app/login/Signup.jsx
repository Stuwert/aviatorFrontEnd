import React from 'react';

export default class Signup extends React.Component{
  render(){
    return(
      <form>
        <label htmlFor="username">Username:</label>
        <input type="number" id="username"/>
        <label htmlFor="password">Password :</label>
        <input type="password" id="password" />
        <button>Log In</button>
      </form>
    )
  }
}
