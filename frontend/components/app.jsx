import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomeContainer from './home/home_container';
import { Link } from 'react-router-dom'
// import logo from "../../app/assets/images/bg.jpeg";
// import logo from "./bg.png";
export default () => {
  let loggedInBar;
  console.log(window.currentUser);
  if (!window.currentUser) {
    loggedInBar = <HomeContainer />
  }
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-bar-left">
          <nav className="logo"></nav>
          <nav className="loc-dropdown"></nav>
        </div>
        
        {loggedInBar}
      </div>
      <div className="restaurant-search-box">
        <div className="search-options">
          <select name="date" id="" className="date-dropdown"></select>
          <select>
            <option value="600">6:00 PM</option>
            <option value="700">7:00 PM</option>
            <option value="800">8:00 PM</option>
          </select>
          <select name="guests" id="" className="num-guests-select"></select>
        </div>
      </div>
    </div>
  );
}