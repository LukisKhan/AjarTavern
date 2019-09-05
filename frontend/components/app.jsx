import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './home/home_container';
import ModalContainer from './modal/modal_container';
import NavbarContainer from './nav/navbar_container';

export default () => {
  let notLoggedIn;
  console.log(window.currentUser);
  if (!window.currentUser) {
    notLoggedIn = <HomeContainer />
  }
  return (
    <div>
      {/* <ModalContainer /> */}
      {/* <NavbarContainer /> */}
      <div className="nav-bar">
        <div className="nav-bar-left">
          <nav className="logo"></nav>
          <nav className="loc-dropdown"></nav>
        </div>
        
        {notLoggedIn}
      </div>
      <div className="restaurant-search-box">
        <div className="search-options">
          <select name="date" id="" className="date-dropdown"></select>
          <select>
            <option value="600">6:00 PM</option>
            <option value="700">7:00 PM</option>
            <option value="800">8:00 PM</option>
          </select>
          <select name="guests" id="" className="num-guests-select">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </div>
  );
}