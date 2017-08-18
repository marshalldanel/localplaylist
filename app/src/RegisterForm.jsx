import React, { Component } from 'react';

class RegisterForm extends Component {
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
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Firstname</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="e.g. John" />
                <span className="icon is-small is-left">
                  <i className="fa fa-user-circle" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Lastname</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="e.g. Smith" />
                <span className="icon is-small is-left">
                  <i className="fa fa-user-circle" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="password" placeholder="Password" />
                <span className="icon is-small is-left">
                  <i className="fa fa-lock" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="password" placeholder="Password" />
                <span className="icon is-small is-left">
                  <i className="fa fa-lock" />
                </span>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <a className="button is-success">Submit</a>
            <a className="button" onClick={() => { this.props.allGone(); }}>Cancel</a>
          </footer>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
