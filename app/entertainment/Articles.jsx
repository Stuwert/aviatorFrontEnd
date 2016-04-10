import React from 'react';
import config from '../configinfo'
import {Link} from 'react-router'

export default class Articles extends React.Component{

  constructor(){
    super();
    this.state = {
      articles : []
    }
  }
  componentDidMount(){
    var that = this;
    fetch('http://' + config.host + ":" + config.port + "/api/articles", {
      method: 'get'
    }).then(function(response){

      response.json().then(function(data){
        var newArticles = data.map(function(article){
          return article;
        })
        that.setState({articles: newArticles})
      })
    })
  }
  render(){
    var articles = this.state.articles.map(function(article){
      return (
        <div key={article._id}>
          <Link to={`/articles/${article.title}`}>
            <h2>{article.title}</h2>
          </Link>
            <p>{article.imageUrl}</p>
            <p>{article.author}</p>
            <p>{article.blurb}</p>
        </div>
      )
    })
    return(
      <div>
        {articles}
      </div>
    )
  }
}
