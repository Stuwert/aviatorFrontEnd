import React from 'react';
import config from '../configinfo'
import userStore from '../flux/stores/userStore'

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
        <div key={i}>
          <h3>{food.name}</h3>
          <div>{food.imageUrl}</div>
          <ul>
            <li>{food.price}</li>
            <li>{food.calories}</li>
            <li>Gluten Free: {food.glutenFree}</li>
            <li>Vegetarian: {food.vegetarian}</li>
            <li>Vegan: {food.vegan}</li>
          </ul>
          <ul>
            {contents}
          </ul>
          <button onClick={handleClick.bind(this, i, food)}>Order Food</button>
        </div>
      )
    })
    return(
      <div>
        {displayFoods}
      </div>
    )
  }
}
