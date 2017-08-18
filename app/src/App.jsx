import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import { setView } from './actions.js';
import Home from './Home.jsx';

// THIS WILL NEVER CONTAIN THIS.STATE ANYWHERE - 
class App extends Component {
  render() {
    console.log(this.props.concerts);
    return (
      <div className="main-container">
        <NavBar />
        <Home
          view={this.props.view}
          locations={this.props.locations}
          genres={this.props.genres}
          concertData={this.props.concerts}
        />
        <footer className="footer"> FOOTER </footer>
      </div>
    );
  }
}

export default App;
