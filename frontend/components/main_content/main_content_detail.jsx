import React from 'react';
import { Link } from 'react-router-dom';

const MainContentDetail = ({restaurant}) => {
  return (
    <li className="restaurant-box">
      <Link className="restaurant-link" to={`/restaurants/${restaurant.id}`}>
        <img className="restaurant-img" src={restaurant.photoUrl} alt={restaurant.name} />
        <span className="restaurant-name">{restaurant.name}</span>
      </Link>
    </li>
  );
}

export default MainContentDetail;