import React, {Component} from 'react';
import NavBar from './NavBar.jsx';

class App extends Component {
  
  constructor(props){ 
    super(props);
    this.state = { 
      brand : "Tripify"
    };
  } 
  render() {
    console.log("made it this far");
    return (
      <NavBar brand={this.state.brand} />
    );
  }
  
}

export default App;
