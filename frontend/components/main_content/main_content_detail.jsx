import React from 'react';
import { Link } from 'react-router-dom';

const MainContentDetail = ({restaurant}) => {
  return (
    <li>
      <Link to={`/restaurants/${restaurant.id}`}>
        {restaurant.name}
      </Link>
    </li>
  );
}

export default MainContentDetail;