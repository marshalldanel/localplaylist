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
            The inputs go here
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
