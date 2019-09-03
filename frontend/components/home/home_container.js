import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Home from './home';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);