import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantDetail = ({ restaurant }) => {
  return (
    <div className="restaurant-detail">
      <h1>{restaurant.name}</h1>
      {/* <h3>Address: {restaurant.address}</h3>
      <h3>Phone Number: {restaurant.phone_num}</h3>
      <h3>Lat: {restaurant.lat}</h3>
      <h3>Lng: {restaurant.lng}</h3> */}
      <div>Ratings</div>
      <div>Tags</div>
      <div>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div>Photos</div>
      <div>Menu</div>
      <div>Reviews</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <div>blank</div>
      <Link to="/">Homepage</Link>
    </div>
  )
}

export default RestaurantDetail;