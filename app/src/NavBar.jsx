import React, {Component} from 'react';

class NavBar extends Component { 
  render() { 
    return ( 
      <header className="navbar">
        <span className="brand">Tripify</span> 
        <button type="button" className="login-form">Login</button> 
        <button type="button" className="register">New User?</button> 
        {/* want to add onClick handlers for these buttons */}
      </header> 
    );
  }
}

export default NavBar;