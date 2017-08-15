import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import {setView} from './actions.js';
import QuestionsContainer from './QuestionsContainer.jsx';

// THIS WILL NEVER CONTAIN THIS.STATE ANYWHERE - 
class App extends Component {
  
  render() {
    return (
      <div className="main-container"> 
        <NavBar/> 
        <QuestionsContainer view={this.props.view} locations={this.props.locations}/>
        <footer className="footer"/> 
      </div>
    );
  }
}

export default App;
