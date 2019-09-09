import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(this.props.closeModal);
  }
  // handleClick(e) {
  //   e.preventDefault();
  //   this.props.processForm(this.props.demoUser).then(this.props.closeModal);
  // }
  //let's not use this for now
  createModal(form) {
    return (
      <div>
        <button id="signUpBtn">Sign Up</button>
        <div id="signUpModal" className="modal">
          <div className="modal-content">
            <span className="signUpClose">&times;</span>
            {form}
          </div>
        </div>
      </div>)
  }
  //lets not use this for now
  createSignUpForm() {
    return(
      <div className="session-form">
        <h2>Welcome to Ajar Tavern</h2>
        <form onSubmit={this.handleSubmit} className="modal-form">
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label>First Name:
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handleInput('firstname')}
            />
          </label>
          <label>Last Name:
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handleInput('lastname')}
            />
          </label>
          <label>Email:
              <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <button>Sign Up!</button>
        </form>
      </div>
    )
  }
  //lets not use this fornow
  hideModal(modalId){
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }

  //lets not use this for now
  // render() {
  //   let signUpForm = this.createSignUpForm();
  //   let myModal = this.createModal(signUpForm);
  //   return (
  //     <div>
  //       {myModal}
  //     </div>
  //   )
  // }
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="modal-screen">
        <form onSubmit={this.handleSubmit} className="modal-form">
          <h1>Welcome to Ajar Tavern!</h1>
          <input placeholder="First Name" className="form-input" type="text" value={this.state.firstname} onChange={this.update('firstname')} />
          <input placeholder="Last Name" className="form-input" type="text" value={this.state.lastname} onChange={this.update('lastname')} />
          <input placeholder="Email" className="form-input" type="text" value={this.state.email} onChange={this.update('email')} />
          <input placeholder="Password" className="form-input" type="password" value={this.state.password} onChange={this.update('password')} />
          {this.renderErrors()}
          <div className="submit">
            <input className="session-submit" type="submit" value="Create Account" />
          </div>
        </form>
        <div className="modal screen js-modal-close"></div>
      </div>
    );
  }
}

export default Signup;
