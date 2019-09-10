import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDemoUser(e) {
    e.preventDefault();
    let user = this.props.user;
    this.props.login(user)
      .then(this.props.closeModal);
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(this.props.closeModal);
  }
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

  createModal(text) {
    return (
      <div>
        <button id="logInBtn">Sign in</button>
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
            <button onClick={this.handleSubmit}>Sign In!</button>
          </label>
        </form>
      </div>
    )
  }

  render() {
    return (
      // this.createModal(this.createLoginForm())
      <div className="modal-screen">
        <form onSubmit={this.handleSubmit} className="modal-form">
          <h1>Please sign in</h1><hr />
          {this.renderErrors()}
          <input placeholder="Email " className="form-input" type="text" value={this.state.email} onChange={this.update('email')} />
          <input placeholder="Password " className="form-input" type="password" value={this.state.password} onChange={this.update('password')} />
          <div className="submit">
            <input className="session-submit" type="submit" value="Sign In" />
          </div>
          <button onClick={this.handleDemoUser} className="session-submit" >Demo User</button>
          <div>
            <a href="#">Create an account</a>
          </div>
        </form>
        <div className="modal screen js-modal-close"></div>
      </div>
    );
  }
}

export default Login;
