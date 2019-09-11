import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantDetail = ({ restaurant }) => {
  return (
    <div className="restaurant-detail">
      <h2>{restaurant.name}</h2>
      <Link to="/">Homepage</Link>
    </div>
  )
}

export default RestaurantDetail;