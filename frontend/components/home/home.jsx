import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//change login to sign in 
class Home extends Component {
  handleLogout() {
    this.props.logout();
  }
  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <button className="logout" onClick={this.handleLogout.bind(this)} >
            <Link to="/"> Log Out </Link>
          </button>
        </div>
        )
    } else {
      return (
        <div className="nav-bar">
          <nav className="auth-btn">
            <button className="signup">
              <Link to="/signup"> Sign Up </Link>
            </button>
            <button className="login">
              <Link to="/login"> Log In </Link>
            </button>
          </nav>
        </div>
      )
    }
  }
}

export default Home
