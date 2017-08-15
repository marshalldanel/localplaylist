import React, {Component} from 'react';
import ConcertMarquee from './ConcertMarquee.jsx';
import NavBar from './NavBar.jsx';
import {setView} from './actions.js';
import QuestionsContainer from './QuestionsContainer.jsx';

// THIS WILL NEVER CONTAIN THIS.STATE ANYWHERE - 
class App extends Component {
  
  render() {
    return (
      <div className="MainContainer"> 
        <NavBar/> 
        <pre>{JSON.stringify(this.props)}</pre> 
        {/* {currentView} */}
        <pre>{JSON.stringify(this.props,null,2)}</pre> 
        <QuestionsContainer view={this.props.view} locations={this.props.locations}/>
        <ConcertMarquee/>
      </div>
    );
  }
}

export default App;
