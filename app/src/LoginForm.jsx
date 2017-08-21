import React, { Component } from 'react';
import { userLogin } from './actions.js';

class LoginForm extends Component {
  userInput(event) {
    event.preventDefault();
    userLogin(
      event.target.querySelector("[name=email]").value,
      event.target.querySelector("[name=password]").value,
    );
  }

  render() {
    const showModal = this.props.isActive;

    return (
      <div className={showModal}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Login to Tripify</p>
            <button className="delete" onClick={() => { this.props.allGone(); }} />
          </header>
          <form onSubmit={() => {
            this.userInput.bind(this);
            this.props.allGone();
          }
          }
          >
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock" />
                  </span>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Submit</button>
              <a className="button" onClick={() => { this.props.allGone(); }}>Cancel</a>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginForm;
