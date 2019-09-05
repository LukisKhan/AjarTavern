import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import Login from './login';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup
            </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(Login);
