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
    const restaurant = this.props;
    return (
      <div className="restaurant-show">
        <img src={restaurant.photoUrl} alt={restaurant.name}/>
        <RestaurantDetail restaurant={restaurant} />
        This is restaurant show
      </div>
    )
  }
}
export default RestaurantShow;