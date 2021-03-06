import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
//
const Auth = ({ component: Component, path, loggedIn }) => (
  <Route />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route />
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
