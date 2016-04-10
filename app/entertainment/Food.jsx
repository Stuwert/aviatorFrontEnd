import React from 'react';
import config from '../configinfo'

export default class Food extends React.Component{
  constructor(){
    super()
    this.state = {
      foods: []
    }
  }
  componentDidMount(){
    var that = this;
    fetch('http://' + config.host + ":" + config.port + "/api/food", {
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
  render(){
    let displayFoods = this.state.foods.map(function(food, i){
      let contents = food.contents.map(function(content, k){
        return <li key={k}>{content}</li>
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
