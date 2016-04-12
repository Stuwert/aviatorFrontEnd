import React from 'react';
import config from '../configinfo'
import $ from 'jquery'
import userActions from '../flux/actions/userActions'
import UserStore from '../flux/stores/userStore'
import {browserHistory} from 'react-router'
import {Button, Card, CardTitle, CardText, Textfield, Grid, Cell} from 'react-mdl'

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
    $.post(config.config + "/api/user/login", {
      body: {
        username: this.state.username,
        password: this.state.password
      }
    }, function(response){
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
      if(UserStore.getUser().authorization){
        browserHistory.push("/admin")
      }else{
        browserHistory.push("/")
      }
    })
  }
  render(){
    return(
      <Grid>
        <Cell align={'middle'} col={6}>
          <Card shadow={0} id="login">
            <CardTitle className="mdl-color__primary">Login </CardTitle>
            <CardText>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <Textfield
                  onChange={this.updateUserName.bind(this)}
                  label="Username"
                  floatingLabel
                  />
                <Textfield
                  onChange={this.updatePassword.bind(this)}
                  label="password"
                  floatingLabel
                  inputClassName="password"
                  />
                <Button raised ripple>Log In</Button>
              </form>
            </CardText>
          </Card>
        </Cell>
      </Grid>
    )
  }
}

export default Login;
