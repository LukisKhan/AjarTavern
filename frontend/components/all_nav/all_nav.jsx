import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import NavbarContainer from '../nav/navbar_container';


export default () => {
  const topbar = (
    <div className="topbar">
      <div className="rightbar">
        <span className="for-restuaranteurs">For Restuaranteurs</span>
        <span className="mobile">Mobile</span>
        <span className="help">Help</span>
      </div>
      <div className="lang">EN</div>
    </div>
  );
  return (
    <div>
      {topbar}
      <div className="nav-bar">
        <div className="nav-bar-left">
          <Link to="/"><nav className="logo"></nav></Link>
          <nav className="loc-dropdown"></nav>
        </div>
        <ModalContainer />
        <NavbarContainer />
      </div>
    </div>
  )
}