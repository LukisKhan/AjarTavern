import { fetchRestaurant } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';

const msp = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.restaurantId);
  const restaurant = state.entities.restaurants[id];
  return { 
    id: id, 
    restaurant: restaurant 
  };
};

const mdp = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(msp, mdp)(RestaurantShow);