import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantDetail = ({ restaurant }) => {
  return (
    <div className="restaurant-detail">
      <div className="restaurant-title">{restaurant.name}</div>
      {/* <h3>Address: {restaurant.address}</h3>
      <h3>Phone Number: {restaurant.phone_num}</h3>
      <h3>Lat: {restaurant.lat}</h3>
      <h3>Lng: {restaurant.lng}</h3> */}
      <div className="description">
        <div>Ratings</div>
        <div>Tags</div>
        <div>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
      <div className="photos">
        <div className="photo-title"><h1>9 Photos</h1></div>
        <ul className="photo-box">
          <li><img src={restaurant.photoUrl} alt={restaurant.name} /></li>
          <li><img src={restaurant.photoUrl} alt={restaurant.name} /></li>
          <li id="larger-photo" className="larger-photo" >
            <img src={restaurant.photoUrl} alt={restaurant.name} />
          </li>
          <li><img src={restaurant.photoUrl} alt={restaurant.name} /></li>
          <li><img src={restaurant.photoUrl} alt={restaurant.name} /></li>
          <li><img src={restaurant.photoUrl} alt={restaurant.name} /></li>
          <li><img src={restaurant.photoUrl} alt={restaurant.name} /></li>
        </ul>
      </div>
      <div className="menu">
        <div className="menu-title"><h1>Menu</h1></div>
        <ul className="menu-box">
          <li alt={restaurant.name} >Menu Item</li>
          <li alt={restaurant.name} >Menu Item Longer</li>
          <li alt={restaurant.name} >Menu Item</li>
          <li alt={restaurant.name} >Short</li>
          <li alt={restaurant.name} >Menu Item</li>
          <li alt={restaurant.name} >Menu Item</li>
          <li alt={restaurant.name} >Menu Item</li>
          <li alt={restaurant.name} >Menu Item</li>
          <li alt={restaurant.name} >Menu Item</li>
        </ul>
      </div>
      <div className="review">
        <div className="review-title"><h1>What People Are Saying</h1></div>
        <div className="review-subtitle">
          <p className="review-overall">Overall ratings and reviews</p>
          <p>Reviews can only be made by diners who have eaten at this restaurant</p>
        </div>
        <ul className="review-box">
          <li alt={restaurant.name} >Review Item</li>
          <li alt={restaurant.name} >Review Item</li>
          <li alt={restaurant.name} >Review Item</li>
          <li alt={restaurant.name} >Review Item</li>
          <li alt={restaurant.name} >Review Item</li>
          <li alt={restaurant.name} >Review Item</li>
        </ul>
      </div>
      <Link to="/">Homepage</Link>
    </div>
  )
}

export default RestaurantDetail;