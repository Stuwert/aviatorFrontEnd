import React from 'react';
import config from '../configinfo'
import userStore from '../flux/stores/userStore'
import {Button, Card, CardTitle, CardText, Textfield, Grid, Cell} from 'react-mdl'


let socket = config.socket;

export default class Food extends React.Component{
  constructor(){
    super()
    socket.on('requestReceived', function(received){
      alert(received)
    })
    this.state = {
      title: '',
      details: ''
    }
  }
  handleSubmit(e){
    e.preventDefault()
    socket.emit("makeHelpRequest", this.state, userStore.getUser())
    this.setState({
      title: '',
      details: ''
    })
  }
  detailsChange(e){
    this.setState({
      details: e.target.value
    })
  }
  titleChange(e){
    this.setState({
      title: e.target.value
    })
  }
  render(){
    return(
      <Grid>
        <Cell col={6}>
          <Card shadow={0}>
            <CardTitle classname="mdl-color__primary">Need Help?</CardTitle>
            <CardText>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <Textfield
                  onChange={this.titleChange.bind(this)}
                  label="Title"
                  floatingLabel
                  />
                <Textfield
                  onChange={this.detailsChange.bind(this)}
                  label="Details"
                  floatingLabel
                  />
                <Button raised ripple>Submit Request</Button>
              </form>
            </CardText>
          </Card>
        </Cell>
      </Grid>
    )
  }
}
