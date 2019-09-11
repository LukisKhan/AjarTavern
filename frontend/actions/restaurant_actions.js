import * as APIUtil from '../utils/restaurant_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants: restaurants
});
export const receiveRestaurants = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant: restaurant
});
export const fetchRestaurants = () => dispatch => (
  APIUtil.fetchRestaurants()
    .then(res => dispatch(receiveRestaurants(res)))
);
export const fetchRestaurant = id => dispatch => (
  APIUtil.fetchRestaurant(id)
    .then(res => dispatch(receiveRestaurant(res)))
);