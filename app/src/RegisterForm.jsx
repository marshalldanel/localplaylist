import React, { Component } from 'react';
import { userRegister } from './actions.js';

class RegisterForm extends Component {
  updateUser(event) {
    event.preventDefault();
    userRegister(
      event.target.querySelector("[name=firstname]").value,
      event.target.querySelector("[name=lastname]").value,
      event.target.querySelector("[name=email]").value,
      event.target.querySelector("[name=password]").value,
      event.target.querySelector("[name=confirmPassword]").value,
    );
  }

  render() {
    let showModal = this.props.isActive;

    return (
      <div className={showModal}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Register to Tripify</p>
            <button className="delete" onClick={() => { this.props.allGone(); }} />
          </header>
          <form onSubmit={this.updateUser.bind(this)}>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Firstname</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. Mickey"
                    name="firstname"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user-circle" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Lastname</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. Smith"
                    name="lastname"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user-circle" />
                  </span>
                </div>
              </div>
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
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="confirmPassword"
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock" />
                  </span>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" value="submit" type="submit">Register!</button>
              <a className="button" onClick={() => { this.props.allGone(); }}>Cancel</a>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
