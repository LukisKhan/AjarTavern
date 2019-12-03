import React from 'react';
import RestaurantDetail from './restaurant_detail';
import AllNav from '../all_nav/all_nav';

class RestaurantShow extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.restaurantId != this.props.match.params.restaurantId) {
      this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }
  }
  render() {
    const restaurant = this.props.restaurant;
    if (restaurant) {
      return (
        <div className="restaurant-show">
          <AllNav />
          <div className="banner-section">
            <img src={restaurant.photoUrl} alt={restaurant.name}/>
          </div>

          <div className="restaurant-flexbox">
            <div className="restaurant-section">
              <ul className="restaurant-top-bar">
                <li>Overview</li>
                <li>Photos</li>
                <li>Menu</li>
                <li>Reviews</li>
              </ul>
              <RestaurantDetail restaurant={restaurant} />
            </div>
            <div className="additional-section">
              <div className="booking-section">Make A Reservation
                <div className="party-size-label">Party Size</div>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
                <div>Date</div>
                <div className="time-label">Time</div>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
                <div></div>
                <button className="session-submit">Find a Table</button>
              </div>
              <div className="location-section">map sub-section
        
              </div>
              <div className="atmosphere-section">atmosphere sub-section

              </div>
      
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Loading Restaurant
        </div>
      )
    }
  }
}
export default RestaurantShow;