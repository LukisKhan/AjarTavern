import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => {
        console.log("signup successful");
        // this.hideModal("myModal");
      });
  }
  createModal(text) {
    return (
      <div>
        <button id="signUpBtn">Sign Up</button>
        <div id="signUpModal" className="modal">
          <div className="modal-content">
            <span className="signUpClose">&times;</span>
            {text}
          </div>
        </div>
      </div>)
  }
  createSignUpForm() {
    return(
      <div className="session-form">
        <h2>Welcome to Ajar Tavern</h2>
        <form onSubmit={this.handleSubmit}>
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
  hideModal(modalId){
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  render() {
    let signUpForm = this.createSignUpForm();
    let myModal = this.createModal(signUpForm);
    return (
      <div>
        {myModal}
      </div>
    )
  }
}

export default Signup;
