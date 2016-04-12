import React from 'react';
import config from '../configinfo'
import {Link} from 'react-router'
import {Card, CardTitle, CardActions, CardText, Button, Grid, Cell} from 'react-mdl'


export default class Articles extends React.Component{

  constructor(){
    super();
    this.state = {
      articles : []
    }
  }
  componentDidMount(){
    var that = this;
    fetch(config.config + "/api/articles", {
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
        <Cell col={12} key={article._id}>
          <Card shadow={0} style={{width: '100%'}}>
            <CardTitle style={{height: '65%', background: `url(${article.imageUrl})`}}>
              <Link to={`/articles/${article.title}`}>
                {article.title}
              </Link>
            </CardTitle>
            <CardText>
              <p>By: {article.author}</p>
              <p>{article.blurb}</p>
            </CardText>
          </Card>
        </Cell>
      )
    })
    return(
      <Grid>
        {articles}
      </Grid>
    )
  }
}
