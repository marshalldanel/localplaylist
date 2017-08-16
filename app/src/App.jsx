import React, {Component} from 'react';
import ConcertMarquee from './ConcertMarquee.jsx';
import NavBar from './NavBar.jsx';
import {setView} from './actions.js';
import QuestionsContainer from './QuestionsContainer.jsx';

// THIS WILL NEVER CONTAIN THIS.STATE ANYWHERE - 
class App extends Component {
  
  render() {
    return (
      <body className="main-container"> 
        <NavBar/> 
        <QuestionsContainer view={this.props.view} locations={this.props.locations}/>
        <ConcertMarquee/>
        <footer className="footer"/> 
      </body> 
    );
  }
}

export default App;
