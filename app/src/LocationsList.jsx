import React, { Component } from 'react';
import { addLocationField, removeLocationField } from './actions.js';
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
        {/* <div className="columns">
          <div className="column is-3"/>
          <div className="column is-4">
            City
          </div>
          <div className="column">
            Dates
          </div>
        </div> */}
        {locations}
        <div className="columns">
          <div className="column is-5" />
          <div className="column is-2">
            <button className="button is-primary is-outlined has-text-centered" onClick={() => { addLocationField(); }}>
              <div className="icon">
                <i className="fa fa-plus" />
              </div>
            </button>
            <button className="button is-primary is-outlined has-text-centered" onClick={() => { removeLocationField(); }}>
              <div className="icon">
                <i className="fa fa-minus" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default LocationsList;
