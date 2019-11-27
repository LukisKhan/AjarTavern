import React from 'react';
import RestaurantDetail from './restaurant_detail';

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

          <div className="banner-section">Banner
            <img src={restaurant.photoUrl} alt={restaurant.name}/>
          </div>
          <div className="restaurant-flexbox">
            <div className="restaurant-section">Restaurant section
              <RestaurantDetail restaurant={restaurant} />
            </div>

            <div className="additional-section">Location and additional
              <div className="booking-section">Booking Section
        
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