import React from 'react';
import config from '../configinfo'
import $ from 'jquery'
import userActions from '../flux/actions/userActions'
import UserStore from '../flux/stores/userStore'
import {browserHistory} from 'react-router'

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
    var that = this;
    e.preventDefault();
    $.post('http://' + config.host + ":" + config.port + "/api/user/login", {
      body: {
        username: this.state.username,
        password: this.state.password
      }
    }, function(response){
      console.log(response);
      userActions.setUser({
        authorization: response.authorization,
        name: response.username,
        seatNumber: response.seatNumber,
        seatLetter: response.seatLetter,
        email: response.email,
        milesEarned: response.milesEarned,
        userExists: true,
        status: response.status
      });
      // console.log(UserStore.getUser());
      if(UserStore.getUser().authorization){
        browserHistory.push("/admin")
      }else{
        browserHistory.push("/")
      }
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
