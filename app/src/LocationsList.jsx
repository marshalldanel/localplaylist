import React, { Component } from 'react';
import { addLocationField } from './actions.js';
import LocationField from './LocationField.jsx';


class LocationsList extends Component {
  render() {
    const locations = this.props.locations.map((location, index) => {
      return (
        <LocationField
          key={index}
          index={index}
          city={location.city}
          start_date={location.start_date}
          end_date={location.end_date}
        />);
    });
    return (
      <div className="locationsContainer container">
        <h2 className="subtitle has-text-centered is-size-2">Where are you travelling to?</h2>
        <div className="columns">
          <div className="column">
            City
          </div>
          <div className="column">
            Arrival Date
          </div>
          <div className="column">
            Departure Date
          </div>
        </div>
        {locations}
        <button className="button is-primary is-outlined down-index" onClick={() => { addLocationField(); }}>Add Another Location </button>
      </div>
    );
  }
}
export default LocationsList;
