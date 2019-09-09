import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_action';
import Signup from './signup';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
