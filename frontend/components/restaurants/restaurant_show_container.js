import { fetchRestaurant } from '../../actions/restaurant_actions';
import { fetchBookings } from '../../actions/booking_actions';
import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';

const msp = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.restaurantId);
  const restaurant = state.entities.restaurants[id];
  const currentUser = state.entities.users[state.session.id];
  const bookings = state.entities.bookings;
  return { 
    id: id, 
    restaurant: restaurant,
    currentUser: currentUser,
    bookings: bookings
  };
};

const mdp = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  fetchBookings: () => dispatch(fetchBookings())
});

export default connect(msp, mdp)(RestaurantShow);