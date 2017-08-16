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
          start_date={location.start_date}
          end_date={location.end_date}
        />);
    });
    return (
        <div className="locationsContainer container is-fluid">
          <h2 className="subtitle has-text-centered is-size-2">Which cities are you going to?</h2>
          {locations}
          <button className="button is-primary is-outlined" onClick={()=> {addLocationField()}}>Add Another Location </button>
        </div> 
    );
  };
}
export default LocationsList;