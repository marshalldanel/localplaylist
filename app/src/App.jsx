import React, {Component} from 'react';
import NavBar from './NavBar.jsx';

// THIS WILL NEVER CONTAIN THIS.STATE ANYWHERE - 
class App extends Component {
  

  render() {

    return (
      <div className="MainContainer"> 
        <NavBar/>
      </div>
    );
    
  }
  
}

export default App;
