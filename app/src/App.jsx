import React, {Component} from 'react';
import ConcertMarquee from './ConcertMarquee.jsx';
import NavBar from './NavBar.jsx';
import {setView} from './actions.js';
import QuestionsContainer from './QuestionsContainer.jsx';
import CitiesResults from './CitiesResults.jsx'
import PlaylistSong from './PlaylistSong.jsx'

// THIS WILL NEVER CONTAIN THIS.STATE ANYWHERE - 
class App extends Component {
  
  render() {
    return (
      <body className="main-container"> 
        <NavBar/> 
        <QuestionsContainer view={this.props.view} locations={this.props.locations}/>
        <ConcertMarquee/>
        <CitiesResults/>
        <PlaylistSong/>
        <footer className="footer"/> 
      </body> 
    );
  }
}

export default App;
