import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions'

const restaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESTAURANTS:
      return Object.assign({}, action.restaurants);
    case RECEIVE_RESTAURANT:
      return Object.assign({}, state, {[action.restaurant.id]: action.restaurant} );
    default:
      return state;
  }
};

export default restaurantReducer;