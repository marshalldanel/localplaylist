import React, { Component } from 'react';

class LoginForm extends Component {

  h_ckinSubmit() {
    // get username and password
    //    you can do this by walking the DOM
    //    or you can do this by using React Managed Components
    // use Fetch to POST to the endpoint
    //    it's the endpoint's business to set appropriate cookies
    //    future calls to other endpoints will be able to read this cookie to validate auth
    //    WARNING: Fetch and cookies are a little weird together, pay attention
    // check response status:
    // if 200, call this.props.setLoggedIn(true)
    // otherwise show failure to the user
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
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input 
                  className="input"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => { } }
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"/>
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
export default LoginForm;
