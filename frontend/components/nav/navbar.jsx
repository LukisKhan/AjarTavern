import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: 'dropdown-hidden' }
    this.openModalFor = this.openModalFor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    // this.toggleDropdown = this.toggleDropdown.bind(this);
    // this.swapStyleSheet = this.swapStyleSheet.bind(this);
  };
  // toggleDropdown() {
  //   if (this.state.dropdown === 'dropdown-hidden') {
  //     this.setState({ dropdown: 'dropdown-visible' });
  //   } else {
  //     this.setState({ dropdown: 'dropdown-hidden' });
  //   }
  // }
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
        <button className="signup-button" onClick={this.openModalFor('signup')}>Sign up</button>
        <button className="login-button" onClick={this.openModalFor('login')}>Sign in</button>
      </ul>
    );
    const greeting = () => (
      <span className="nav-links">
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