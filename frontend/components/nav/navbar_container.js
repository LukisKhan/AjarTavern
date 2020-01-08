import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { deleteBooking } from '../../actions/booking_actions';

const mapStateToProps = ({ session, entities: { users, bookings, restaurants } }) => {
  return {
    currentUser: users[session.id],
    currentBookings: bookings,
    restaurants,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchRestaurants: () => dispatch(fetchRestaurants()),
  deleteBooking: (id) => dispatch(deleteBooking(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);