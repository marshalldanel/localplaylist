import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { updateLocationField } from './actions.js';


class LocationField extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      start_date: '',
      end_date: '',
      error: null,
    };
    this.onChange = city => this.setState({ city });
  }

  updateField() {
    updateLocationField(this.props.index, this.state.city, this.state.start_date, this.state.end_date);
  }

  render() {
    const options = {
      types: ['(cities)'],
    };
    const inputProps = {
      value: this.state.city,
      onChange: this.onChange,
    };
    return (
      <div className="location-fields">
        <div className="container">{this.state.error} </div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control">
                <PlacesAutocomplete inputProps={inputProps} options={options} googleLogo={false} highlightFirstSuggestion />
                {/* <input
                  className="city input"
                  type="text"
                  placeholder="i.e. Vancouver"
                  name="city"
                  onChange={(event) => {
                    this.setState({
                      city: event.target.value,
                      error: null,
                    }, this.updateField);
                  }}
                /> */}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <div className="control">
                <input
                  className="date input"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  name="start_date"
                  onChange={(event) => {
                    this.setState({
                      start_date: event.target.value.split('-').join(''),
                      error: null,
                    }, this.updateField);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <div className="control">
                <input
                  className="date input"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  name="end_date"
                  onChange={(event) => {
                    this.setState({
                      end_date: event.target.value.split('-').join(''),
                      error: null,
                    }, this.updateField);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationField;
