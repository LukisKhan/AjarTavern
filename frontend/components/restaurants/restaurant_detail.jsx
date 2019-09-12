import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantDetail = ({ restaurant }) => {
  return (
    <div className="restaurant-detail">
      <h2>{restaurant.name}</h2>
      <h3>Address: {restaurant.address}</h3>
      <h3>Phone Number: {restaurant.phone_num}</h3>
      <h3>Lat: {restaurant.lat}</h3>
      <h3>Lng: {restaurant.lng}</h3>
      <Link to="/">Homepage</Link>
    </div>
  )
}

export default RestaurantDetail;