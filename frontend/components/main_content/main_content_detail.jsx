import React from 'react';
import { Link } from 'react-router-dom';

const MainContentDetail = ({restaurant}) => {
  return (
    <li className="restaurant-box">
      <Link className="restaurant-link" to={`/restaurants/${restaurant.id}`}>
        <img className="restaurant-img" src={restaurant.photoUrl} alt={restaurant.name} />
        <div className="restaurant-below-img">
          <div className="restaurant-name">{restaurant.name}</div>
          <div className="restaurant-review"> #'s reviews</div>
          <div className="restaurant-cuisine">
              <span>Cuisine</span> 
              <span className="dot">{" " + String.fromCharCode(183) + " "}</span> 
              <span>$$$</span>
              <span className="dot">{" " + String.fromCharCode(183) + " "}</span>
              <span>Location</span>
            </div>
        </div>
      </Link>
    </li>
  );
}

export default MainContentDetail;