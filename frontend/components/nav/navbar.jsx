import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: 'dropdown-hidden' }
    this.openModalFor = this.openModalFor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  };
  toggleDropdown() {
    if (this.state.dropdown === 'dropdown-hidden') {
      this.setState({ dropdown: 'dropdown-visible' });
    } else {
      this.setState({ dropdown: 'dropdown-hidden' });
    }
  }
  openModalFor(form) {
    return e => {
      this.props.openModal(form)
      this.toggleDropdown()
    }
  }
  UNSAFE_componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
  }
  handleClick(e) {
    if (this.dropdownRef && (this.dropdownRef.contains(e.target) || this.iconRef.contains(e.target))) {
      return
    }
    this.setState({ dropdown: 'dropdown-hidden' })
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      if (this.state.dropdown === 'dropdown-hidden') {
        this.setState({ dropdown: 'dropdown-visible' });
      } else {
        this.setState({ dropdown: 'dropdown-hidden' });
      }
    }
  }
  render() {
    const sessionLinks = () => (
      <ul className="nav-links">
        <button id="signUpBtn" className="signup-button" onClick={this.openModalFor('signup')}>Sign up</button>
        <button id="logInBtn" className="login-button" onClick={this.openModalFor('login')}>Sign in</button>
      </ul>
    );
    const greeting = () => (
      <span className="nav-links">
        <h3 className="header-name">Hi, {this.props.currentUser.firstname} 
          <i className="arrow down fa fa-chevron-down" tabIndex="0" ref={iconRef => this.iconRef = iconRef} onClick={this.toggleDropdown} onKeyUp={this.handleKeyUp}></i></h3>
        {/* <i tabIndex="0" ref={iconRef => this.iconRef = iconRef} className="fa fa-chevron-down" onClick={this.toggleDropdown} onKeyUp={this.handleKeyUp}></i> */}
        <ul ref={dropdownRef => this.dropdownRef = dropdownRef} id='dropdown' className={this.state.dropdown}>
          <span className="li-cont">
            <li className="drop-list-item">
              <Link tabIndex="0" className="go-to-profile" to={`/users/${this.props.currentUser.id}/profile`}>Go to Profile</Link>
            </li>
            <li className="drop-list-item">
              <button onClick={this.props.logout}>Log Out</button>
            </li>
          </span>
        </ul>
      </span>
    );
    return (
      <nav className="navbar">
       {this.props.currentUser ? greeting() : sessionLinks()}
      </nav>
    );
  }
};

export default Navbar;