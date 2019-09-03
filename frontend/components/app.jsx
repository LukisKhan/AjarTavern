import React from 'react';
// import WelcomeBar from './nav_bar/welcome_bar_container';
// import NavBarContainer from './nav_bar/nav_bar_container';
// import ChirpIndexContainer from './chirps/chirp_index_container';
// import Home from './home/home';
// import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

export default () => {
  debugger;
  return (
    <div>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
    </div>
  );
}