// require('./main.css')

//Require
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router'
import App from './App'
import Home from './Home'

//importing entertainment
import SheepGame from './gameRender/main';
import Movies from './entertainment/Movies'
import Movie from './entertainment/Movie'
import Food from './entertainment/Food'
import OneFood from './entertainment/OneFood'
import Magazine from './entertainment/Magazine'
import Article from './entertainment/Article'
import Safety from './entertainment/Safety'

//importing auth info
import Login from './login/Login'
import Signup from './login/Signup'

//importing admin info
import Admin from './admin/Admin'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>

      <IndexRoute component={Home} />

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/game" component={SheepGame} />
      <Route path="/movies" component={Movies} />
      <Route path="/movies/:id" component={Movie} />
      <Route path="/food" component={Food} />
      <Route path="/food/:id" component={OneFood} />
      <Route path="/magazine" component={Magazine} />
      <Route path="/magazine/:id" component={Article} />
      <Route path="/safety" component={Safety} />

    </Route>

    <Route path="/admin" component={Admin} />

  </Router>,
  document.querySelector('#app')
)
