import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
        <button id="myBtn">Sign Up</button>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            {text}
          </div>
        </div>
      </div>)
  }
  createSignUpForm() {
    return(
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
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
    return (
      <div>
        {this.createModal(signUpForm)}
      </div>
    )
  }
}

export default Signup;
