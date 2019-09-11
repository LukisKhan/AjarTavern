import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import ModalContainer from './modal/modal_container';
import NavbarContainer from './nav/navbar_container';
const Main = () => {
  const topbar = (<div className="topbar">
    <div className="rightbar">
      <span className="for-restuaranteurs">For Restuaranteurs</span>
      <span className="mobile">Mobile</span>
      <span className="help">Help</span>
    </div>
    <div className="lang">EN</div>
  </div>);
  const selectTime = ( <select>
      <option value="800">8:00 AM</option>
      <option value="900">9:00 AM</option>
      <option value="1000">10:00 AM</option>
      <option value="1100">11:00 AM</option>
      <option value="1200">12:00 PM</option>
      <option value="1300">1:00 PM</option>
      <option value="1400">2:00 PM</option>
      <option value="1500">3:00 PM</option>
      <option value="1600">4:00 PM</option>
    </select> );
  const selectNumGuest = (<select name="guests" id="" className="num-guests-select">
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>)
  return (
    <div>
      {topbar}
      <div className="nav-bar">
        <div className="nav-bar-left">
          <Link to="/"><nav className="logo"></nav></Link>
          <nav className="loc-dropdown"></nav>
        </div>
        <ModalContainer />
        <NavbarContainer />
      </div>
      <div className="restaurant-search-box">
        <div className="search-options">
          <input type="date" id="start" name="booking-date"
            min="2019-01-01" max="2019-12-31" />
          {selectTime}
          {selectNumGuest}
        </div>
        <input type="text" name="search-field" id=""/>
        <button>Let's Go</button>
      </div>


    </div>
  );
}

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Redirect to="/" />
    </Switch>
  )
}