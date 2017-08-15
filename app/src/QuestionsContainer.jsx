import React, {Component} from 'react';
import Locations from './Locations.jsx';
import {setView} from './actions.js';

class QuestionsContainer extends Component { 
  render() { 
    let currentView;
    switch(this.props.view) {
      case 'locations': 
        currentView = <Locations locations={this.props.locations}/> 
      break;
      case 'genres': 
        currentView = <Genres genres={this.props.genres}/> 
      break;
    }
    
    return(
      <div className="question-container"> 
        {console.log("this is working")}
        {currentView}
      <button onClick={()=> {setView('genres')}}>Now Select Genres</button>
      </div> 
    );
  };
}

export default QuestionsContainer;
