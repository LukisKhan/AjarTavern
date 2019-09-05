import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick () {
    0;
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.closeModal);
  }

  createModal(text) {
    return (
      <div>
        <button id="logInBtn">Log in</button>
        <div id="logInModal" className="modal">
          <div className="modal-content">
            <span className="logInClose">&times;</span>
            {text}
          </div>
        </div>
      </div>)
  }
  createLoginForm() {
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form>
          <label>Username:
          <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>

          <label>Password:
          <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            <button onClick={this.handleSubmit}>Log In!</button>
          </label>
        </form>
      </div>
    )
  }

  render() {
    return (
      this.createModal(this.createLoginForm())
    );
  }
}

export default Login;
