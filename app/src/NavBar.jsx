import React, {Component} from 'react';

class NavBar extends Component { 
  render() { 
    return ( 
      <header className="navbar">
        <span className="brand">{this.props.brand}</span> 
        <button type="button" className="login-form">Login</button> 
        <button type="button" className="register">New User?</button> 
        {/* want to add on click handlers for these buttons */}
      </header> 
    );
  }
}

export default NavBar;