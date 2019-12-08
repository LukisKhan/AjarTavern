import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users, bookings } }) => {
  return {
    currentUser: users[session.id],
    currentBookings: bookings
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);