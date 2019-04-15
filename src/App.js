import React, { Component } from 'react';
import { Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './Pages/HomePage';
import Navbar from './components/navbar';
import UserProfilePage from './Pages/UserProfilePage';
import axios from 'axios';
import Spinner from './components/Spinner';
import MyProfilePage from './Pages/MyProfilePage'

class App extends React.Component {
  state = {
    users: [],
    title: 'Nextagram',
    loading: true,
    currentUser: null,
    me: []
  }

  //axios used to get APIs. Then we render it in the return below. 
  componentDidMount() {//do it here because 
    // performing a GET request to '/api-end-point'
    axios.get('https://insta.nextacademy.com/api/v1/users')//when you get something it returns you a promise
      .then(result => {//.then can only be used on a promise which is something that is not known yet
        // If successful, we do stuffs with 'result'
        this.setState({ users: result.data, loading: false })//once the axios gets the users data, then it will set the loading to false & it will disappear 
        //{, loading: false} removed from the upper this setState
        // setTimeout(() => { this.setState({ loading: false }) }, 2000)
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
  }

  setUser = () => {
    const currentUser = localStorage.getItem("jwt");
    if (currentUser) {
      this.setState({
        currentUser: currentUser
      });
    } else {
      this.setState({
        currentUser: null
      });
    }
  };

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} setUser={this.setUser} />
        <Spinner loading={this.state.loading} />
        {/* <HomePage /> */}
        <div>
          {/* <Link to="/">Home</Link> */}
          {/* We temporarily hardcode this to user id 1*/}
          {/* <Link to="/users/1">My Profile</Link> */}
          <Route exact path="/" component={props => {
            return (
              <HomePage users={this.state.users}{...props} />
            )
          }} />
          {/* Router has a magical property which gives history, match & location */}
          <Route path="/users/:id" render={props => {
            return (<UserProfilePage users={this.state.users} {...props} />
            )
          }} />
          <Route exact path="/profile" component={props => {
            return (<MyProfilePage me={this.state.me} {...props} />
            )
          }} />
        </div>
      </>
    )
  }
}

export default App;