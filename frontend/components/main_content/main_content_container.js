import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import MainContent from './main_content';

const msp = state => ({
  restaurants: Object.values(state.entities.restaurants)
});

const mdp = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(msp, mdp)(MainContent)