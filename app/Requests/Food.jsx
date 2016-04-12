import React from 'react';
import config from '../configinfo'
import userStore from '../flux/stores/userStore'
import {Card, CardTitle, CardActions, CardText, Button, Grid, Cell} from 'react-mdl'


let socket = config.socket;

var handleClick = function(i, content){
  socket.emit("makeOrderRequest", content, userStore.getUser())
}

export default class Food extends React.Component{
  constructor(){
    super()
    this.state = {
      foods: []
    }
    socket.on('requestReceived', function(received){
      alert(received)
    })
  }
  componentDidMount(){
    var that = this;
    fetch(config.config + "/api/food", {
      method: 'get'
    }).then(function(response){
      response.json().then(function(data){
        var newFoods = data.map(function(food){
          return food;
        })
        that.setState({foods: newFoods})
      })
    })
  }
  _handleClick(){

  }
  render(){
    let displayFoods = this.state.foods.map(function(food, i){
      let contents = food.contents.map(function(content, k){
        return (
          <li key={k}>{content}</li>
        )

      })
      return (
        <Cell col={4} key={food._id}>
          <Card shadow={0} style={{width: '100%', background: `url${food.imageUrl}`, margin: 'auto'}}>
            <CardTitle>
              {food.name}
            </CardTitle>
            <CardText>
              <p>Only {food.calories}</p>
              <p>with</p>
              <ul>{contents}</ul>
              <h6>More Details:</h6>
              <ul>
                {food.glutenFree ? <li>Gluten Free</li> : null}
                {food.vegetarian ? <li>Vegetarian</li> : null}
                {food.vegan ? <li>Vegan</li> : null}
              </ul>
            </CardText>
            <CardActions>
              <Button onClick={handleClick.bind(this, i, food)} colored raised>Order {food.price}</Button>
            </CardActions>
          </Card>
        </Cell>
      )
    })
    return(
      <Grid>
        {displayFoods}
      </Grid>
    )
  }
}
