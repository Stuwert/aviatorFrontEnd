import React from 'react';
import config from '../configinfo'
import $ from 'jquery'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      displayMessage: ''
    }
  }
  updateUserName(e){
    this.setState({
      username: e.target.value
    })
  }
  updatePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    $.post('http://' + config.host + ":" + config.port + "/api/user/login", {
      body: {
        username: this.state.username,
        password: this.state.password
      }
    }, function(response){
      console.log(response);
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="username">Username:</label>
          <input onChange={this.updateUserName.bind(this)} value={this.state.username}/>
          <label htmlFor="password">Pasword :</label>
          <input onChange={this.updatePassword.bind(this)} value={this.state.password} type="password" id="password" />
          <button type='submit'>Log In</button>
        </form>
        <p>{this.state.displayMessage}</p>
      </div>

    )
  }
}

export default Login;
