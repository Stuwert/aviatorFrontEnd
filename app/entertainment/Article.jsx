import React from 'react';
import config from '../configinfo'
import {Link} from 'react-router'

export default class Article extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: null,
      imageUrl: null,
      author: null,
      blurb: null,
      content: []
    }
  }
  componentDidMount(){
    var that = this;
    fetch(config.config + "/api/articles/" + this.props.params.title, {
      method: 'get'
    }).then(function(response){

      response.json().then(function(data){
        that.setState(data)
      })
    })
  }
  render(){
    var content = this.state.content.map(function(paragraph, i){
      return <p key={i}>{paragraph}</p>
    })
    return(
      <div>
        <h2>{this.state.title}</h2>
        <div>{this.state.imageUrl}</div>
        <p>{this.state.author}</p>
        <div>
          {content}
        </div>
      </div>
    )
  }
}
