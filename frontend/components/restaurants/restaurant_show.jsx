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
          1
          <img src={restaurant.photoUrl} alt={restaurant.name}/>
          <RestaurantDetail restaurant={restaurant} />
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