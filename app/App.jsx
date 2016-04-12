import React from 'react'
import {Link}  from 'react-router'
import {Header, Navigation, Drawer, Content, Layout, Textfield} from 'react-mdl'

import userStore from './flux/stores/userStore'
import userActions from './flux/actions/userActions'


//add socket request for help


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false,
      activeTab: 1
    }
  }
  componentDidMount(){
    userStore.addChangeListener(this._onChange.bind(this))
  }
  componentWillUnmount(){
   userStore.removeChangeListener(this._onChange.bind(this));
  }
  _onChange(){
    this.setState({
      isLoggedIn: userStore.getUser().userExists
    })
    console.log(this.state);
  }
  render(){
    return (
      <div>
        <Layout fixedHeader>
          <Header title="Aviator" >
            <Navigation>
              <Link to="/">Home</Link>
              {this.state.isLoggedIn ? <Link to="/logout">Log Out</Link> : <Link  to="/login">Log In</Link>}
            </Navigation>
          </Header>
          <Drawer title="Aviator">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/game">Games</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/articles">Articles</Link>
              <Link to="/safety">Safety Information</Link>
              {this.state.isLoggedIn ? <Link to='/food'>Food</Link> : null}
              {this.state.isLoggedIn ? <Link to='/help'>Help</Link> : null}
              {this.state.isLoggedIn ? <Link to="/logout">Log Out</Link> : null}
              {!this.state.isLoggedIn ? <Link  to="/login">Log In</Link> : null }
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">{this.props.children}</div>
          </Content>
        </Layout>
      </div>
    )
  }
}
