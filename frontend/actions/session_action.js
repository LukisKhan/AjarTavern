import { postUser, deleteSession, postSession } from '../utils/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});
export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const resetSessionErrors = errors => ({
  type: 'RESET_SESSION_ERRORS',
  errors
});

export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const login = formUser => dispatch => postSession(formUser)
  .then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logout = () => (dispatch) => {
  deleteSession().then(() => dispatch(logoutCurrentUser()));
};
