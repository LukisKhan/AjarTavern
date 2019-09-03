import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <button className="signup">
          <Link to="/signup"> Sign Up </Link>
        </button>
        <button className="login">
          <Link to="/login"> Log In </Link>
        </button>
      </div>
    )
  }
}

export default Home
