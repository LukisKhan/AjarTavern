import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
//change login to sign in 
class Home extends Component {
  handleLogout() {
    this.props.logout();
  }

  render() {
    if (this.props.currentUserId) {
      return (
        <div className="nav-bar-right">
          <nav className="auth-btn">
            <button className="logout" onClick={this.handleLogout.bind(this)} >Log Out</button>
          </nav>
        </div>
        )
    } else {
      return (
        <div className="nav-bar-right">
          <nav className="auth-btn">
            <SignupContainer />
            <LoginContainer />
          </nav>
        </div>
      )
    }
  }
}

export default Home
