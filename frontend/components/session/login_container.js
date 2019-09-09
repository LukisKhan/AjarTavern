import React from 'react';
import { connect } from 'react-redux';
import { login, resetSessionErrors } from '../../actions/session_action';
import Login from './login';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    demoUser: { username: "tommy", password: "hunter12" }
  };
};

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  closeModal: () => dispatch(closeModal()),
  resetSessionErrors: () => dispatch(resetSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
