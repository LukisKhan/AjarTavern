import React from 'react';

class RestaurantShow extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }
  componentDidUpdate(prevProps) {
    return 0;
  }
  render() {
    return (
      <div>
        This is it
      </div>
    )
  }
}
export default RestaurantShow;