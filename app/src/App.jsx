import React, { Component } from 'react';
import ConcertMarquee from './ConcertMarquee.jsx';
import NavBar from './NavBar.jsx';
import { setView } from './actions.js';
import QuestionsContainer from './QuestionsContainer.jsx';
import CitiesResults from './CitiesResults.jsx';
import Playlist from './Playlist.jsx';

// THIS WILL NEVER CONTAIN THIS.STATE ANYWHERE - 
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />
        <QuestionsContainer view={this.props.view} locations={this.props.locations} />
        <ConcertMarquee />
        <CitiesResults locations={this.props.locations} />
        <Playlist />
        <footer className="footer" />
      </div>
    );
  }
}

export default App;
