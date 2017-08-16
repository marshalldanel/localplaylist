import React, {Component} from 'react';
import LocationsList from './LocationsList.jsx';
import {setView, storeLocations} from './actions.js';

class QuestionsContainer extends Component { 
  render() { 
    let currentView;
    switch(this.props.view) {
      case 'locations': 
        currentView = <LocationsList locations={this.props.locations}/> 
      break;
      case 'genres': 
        currentView = <Genres genres={this.props.genres}/> 
      break;
    }
    
    return(
      <section className="section is-medium"> 
        {currentView}
      <button onClick={() => {

        setView('genres');
        }}>Next - Genres</button>
      </section> 
    );
  };
}

export default QuestionsContainer;
