import React from 'react';
// import WelcomeBar from './nav_bar/welcome_bar_container';
// import NavBarContainer from './nav_bar/nav_bar_container';
// import ChirpIndexContainer from './chirps/chirp_index_container';
// import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomeContainer from './home/home_container';
import { Link } from 'react-router-dom'
// import logo from "../../app/assets/images/bg.jpeg";
// import logo from "./bg.png";
export default () => {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-bar-left">
          <nav className="logo"></nav>
          <nav className="loc-dropdown"></nav>
        </div>
        <HomeContainer />
      </div>
    </div>
  );
}