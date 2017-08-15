import React, {Component} from 'react';

class LocationField extends Component{ 
  render() { 
    // will need to add input verification
    return(
      <div className="location-fields">
        <input className="city" placeholder="i.e. Vancouver"/>
        <input className="date" placeholder="dd/mm/yyyy"/>
      </div>
      
    );
  };

}

export default LocationField;
