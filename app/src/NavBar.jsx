import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import { userInfo, userLogout } from './actions.js';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      registerModal: false,
    };
    this.goAwayModal = this.goAwayModal.bind(this);
  }

  goAwayModal() {
    this.setState({ loginModal: false, registerModal: false });
  }

  render() {
    const user = userInfo();
    const userName = user ? user.firstname : null;
    let navBarEnd;

    if (userName) {
      navBarEnd = (<div className="navbar-end">
        <div className="navbar-item">
          <small>Hi {userName}</small>
        </div>
        <div className="navbar-item">
          <a
            role="menuitem"
            tabIndex="0"
            type="button"
            className="is-primary"
            onClick={() => { userLogout(); }}
          >
              Logout
          </a>
        </div>
      </div>
      );
    } else {
      navBarEnd =
        (<div className="navbar-end">
          <div className="navbar-item">
            <a
              role="menuitem"
              tabIndex="0"
              type="button"
              className="is-primary"
              onClick={() => { this.setState({ loginModal: !this.state.loginModal, registerModal: false }); }}
            >
              Login
            </a>
          </div>
          <div className="navbar-item">
            <a
              role="menuitem"
              tabIndex="0"
              type="button"
              className="is-primary"
              onClick={() => { this.setState({ registerModal: !this.state.registerModal, loginModal: false }); }}
            >
              Register
            </a>
          </div>
          <div className="navbar-item">
            <a
              role="menuitem"
              tabIndex="0"
              type="button"
              className="is-primary"
              href="/spotify-userAuth"
              target="popup"
            >
              Login to Spotify 
            </a>
          </div>
        </div>
        );
    }


    return (
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar-brand">
              <a href="/" className="logo-text navbar-item">Tripify</a>
            </div>
            {navBarEnd}
            {(this.state.loginModal ? (
              <LoginForm isActive="modal is-active" allGone={this.goAwayModal} />
            ) : null)}
            {(this.state.registerModal ? (
              <RegisterForm
                isActive="modal is-active"
                allGone={this.goAwayModal}
              />
            ) : null)}
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
