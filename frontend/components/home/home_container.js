import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Home from './home';

const mapStateToProps = ({ session }) => {
  return {
    currentUserId: session.id
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);