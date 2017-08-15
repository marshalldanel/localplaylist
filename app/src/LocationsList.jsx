import React, {Component} from 'react';
import {addLocationField} from './actions.js';
import LocationField from './LocationField.jsx'


class LocationsList extends Component { 
  render(){ 
    const locations = this.props.locations.map((location, index) => {
      return( 
        <LocationField 
          key={location.id}
          index={index}
          city={location.city}
          date={location.date}
        />);
    });
    return (
        <section className="locationsContainer">
          <div>Which cities are you going to?</div>
          {locations}
          <button onClick={()=> {addLocationField()}}>Add Another Location </button>
        </section> 
    );
  };
}
export default LocationsList;