import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import restaurantsReducer from './restaurants_reducer'
import bookingsReducer from './bookings_reducer'

export default combineReducers({
  users: usersReducer,
  restaurants: restaurantsReducer,
  bookings: bookingsReducer
});
