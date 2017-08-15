import React, {Component} from 'react';
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
        <QuestionsContainer view={this.props.view}/>
      </div>
    );
  }
}

export default App;
