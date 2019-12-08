import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: 'dropdown-hidden', 
      notificationDropdown: 'dropdown-hidden' }
    this.openModalFor = this.openModalFor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleNotiKeyUp = this.handleNotiKeyUp.bind(this);
    this.toggleNotificationDropdown = this.toggleNotificationDropdown.bind(this);
  };
  //////Needs refractoring to combine the two separate modal toggles
  toggleDropdown() {
    if (this.state.dropdown === 'dropdown-hidden') {
      this.setState({ dropdown: 'dropdown-visible' });
    } else {
      this.setState({ dropdown: 'dropdown-hidden' });
    }
  }
  toggleNotificationDropdown() {
    if (this.state.notificationDropdown === 'dropdown-hidden') {
      this.setState({ notificationDropdown: 'dropdown-visible' });
    } else {
      this.setState({ notificationDropdown: 'dropdown-hidden' });
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
    this.setState({ dropdown: 'dropdown-hidden',
      notificationDropdown: 'dropdown-hidden'  })
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
  handleNotiKeyUp(e) {
    if (e.keyCode === 13) {
      if (this.state.notificationDropdown === 'dropdown-hidden') {
        this.setState({ notificationDropdown: 'dropdown-visible' });
        this.bookingsDetail();
      } else {
        this.setState({ notificationDropdown: 'dropdown-hidden' });
      }
    }
  }
  bookingsDetail() {
    let currUserId = this.props.currentUser.id;
    let currentBookings = document.getElementById('notification-list')
    if(currentBookings) {
      let children = currentBookings.childNodes
      for (let i = 0; i < children.length; i ++) {
        currentBookings.removeChild(children[i])
      }
    }
    Object.values(this.props.currentBookings).forEach( booking => {
      if (booking.user_id === currUserId) {
        let li = document.createElement("LI")
        li.innerText = `Date ${booking.date} time: ${booking.time - 12} PM`
        li.className = "drop-list-item";
        currentBookings.appendChild(li)
      }
    })
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
        <nav className="booking-dropdown">
          {/* start here tomorrow, bookings dropdown */}
          <i className="square fa" ref={iconRef => this.iconRef = iconRef} onClick={this.toggleNotificationDropdown} onKeyUp={this.handleNotiKeyUp}>
            <div className="notification">
              <div className="notification-num">2</div>
            </div>
          </i>
          <ul ref={dropdownRef => this.dropdownRef = dropdownRef} id='notification-dropdown' className={this.state.notificationDropdown}>
            <span className="dropdown-items" id='notification-list'>
            </span>
          </ul>
        </nav>
        <div className="greetings">
          <h3 className="header-name">Hi, {this.props.currentUser.firstname} 
          <i className="arrow down fa" ref={iconRef => this.iconRef = iconRef} onClick={this.toggleDropdown} onKeyUp={this.handleKeyUp}></i></h3>
          <ul ref={dropdownRef => this.dropdownRef = dropdownRef} id='dropdown' className={this.state.dropdown}>
            <span className="dropdown-items">
              <li className="drop-list-item">
                <Link className="go-to-profile" to={`/users/${this.props.currentUser.id}/profile`}>Go to Profile</Link>
              </li>
              <li className="drop-list-item">
                <button onClick={this.props.logout}>Log Out</button>
              </li>
            </span>
          </ul>
        </div>
      </span>
    );
    this.bookingsDetail();
    return (
      <nav className="navbar">
       {this.props.currentUser ? greeting() : sessionLinks()}
      </nav>
    );
  }
};

export default Navbar;