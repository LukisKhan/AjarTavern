import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import RestaurantShowContainer from './restaurants/restaurant_show_container';
import MainContentContainer from './main_content/main_content_container';
import AllBar from './all_nav/all_nav';
import Footer from './nav/footer';

const Main = () => {
  const selectTime = (<select className="time-select">
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
  const selectNumGuest = (
    <select name="guests" id="" className="num-guests-select">
      <option value="2">2 people</option>
      <option value="3">3 people</option>
      <option value="4">4 people</option>
      <option value="5">5 people</option>
      <option value="6">6 people</option>
      <option value="7">7 people</option>
      <option value="8">8 people</option>
      <option value="9">9 people</option>
      <option value="10">10 people</option>
    </select>
  )
  return (
    <div>
      <div className="app-root">
        <AllBar />
        <div className="bg"></div>
        <div className="search-header">Find your table for any occasion</div>
        <div className="restaurant-search-box">
          <div className="search-options">
            <input className="date-dropdown " type="date" id="start" name="booking-date"
              min="2019-01-01" max="2019-12-31" />
            {selectTime}
            {selectNumGuest}
          </div>
          <input type="text" className="search-field" id="" placeholder="Search Nearby"/>
          <button id="lets-go-btn">Let's Go</button>
        </div>
        <MainContentContainer />
        <Footer />
      </div>
    </div>
  );
}

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <Redirect to="/" />
    </Switch>
  )
}