import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { updateLocationField } from './actions.js';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


// We can force validations for cities via this: https://github.com/kenny-hibino/react-places-autocomplete/issues/106
// We will need to update the eventful API to recieve geo cordinates within


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
    const myStyles = {
      root: { zIndex: 2 },
    };
    const cssClasses = {
      input: 'input',
    };

    return (
      <div className="location-fields">
        <div className="container">{this.state.error} </div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control up-index">
                <PlacesAutocomplete inputProps={inputProps} options={options} googleLogo={false} styles={myStyles} highlightFirstSuggestion classNames={cssClasses} />
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
