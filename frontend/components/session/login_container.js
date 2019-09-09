import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import Login from './login';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    demoUser: { firstname: "tommy", lastname: "deuk", email: "tommy@looksgoodto.me", password: "hunter12" }
  };
};

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
