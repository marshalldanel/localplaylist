import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import { setView } from './actions.js';
import Home from './Home.jsx';

// THIS WILL NEVER CONTAIN THIS.STATE ANYWHERE - 
class App extends Component {
  render() {
    let loading = '';
    console.log(this.props.loading);

    if (this.props.loading === true) {
      loading = (
        <div className="modal is-active animated infinite fadeIn">
          <div className="modal-background" />
          <div className="modal-content">
            <h1>Loading</h1>
          </div>
          {/* <button className="modal-close is-large" aria-label="close" /> */}
        </div>
      );
    }

    return (
      <div className="main-container">
        {loading}
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
