import React from 'react';
import { Link } from 'react-router-dom';

const MainContentDetail = ({restaurant}) => {
  return (
    <li>
      <Link to={`/restaurants/${restaurant.id}`}>
        {restaurant.name}
      </Link>
      <img src={restaurant.photoUrl} alt={restaurant.name} />
    </li>
  );
}

export default MainContentDetail;