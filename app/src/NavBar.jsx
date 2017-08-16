import React, {Component} from 'react';
// import {setView} from './actions.js';

class NavBar extends Component { 
  render() { 
    return ( 
      <header>
        <nav className="navbar"> 
          <h1 className="navbar-brand">Tripify</h1> 
        <div className="navbar-end"> 
          <button type="button" className="navbar-item">Login</button> 
          <button type="button" className="navbar-item">New User?</button> 
        </div>  
        </nav> 
      </header> 
    );
  }
}

export default NavBar;