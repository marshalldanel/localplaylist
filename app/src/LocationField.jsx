import React, { Component } from 'react';
import moment from 'moment';
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
    updateLocationField(this.props.index, this.state.city, moment(this.state.startDate).format('YYYYMMDD'), moment(this.state.endDate).format('YYYYMMDD'));
  }

  render() {
    const options = {
      types: ['(cities)'],
    };
    const inputProps = {
      value: this.state.city,
      onChange: this.onChange,
      placeholder: 'Destination...',
    };
    const myStyles = {
      // root: { zIndex: 1 },
      autocompleteContainer: { zIndex: 2 },
    };
    const cssClasses = {
      input: 'form-text-field input',
    };

    return (
      <div className="location-fields">
        <div className="container">{this.state.error} </div>
        <div className="columns">
          <div className="column is-3" />
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
                <DateRangePicker
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate }, this.updateField)} // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                  showDefaultInputIcon
                  required
                  startDatePlaceholderText={'Arriving'}
                  endDatePlaceholderText={'Departing'}
                />
                {/* <input
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
                /> */}
              </div>
            </div>
          </div>
                    <div className="column is-2" />
        
        </div>
      </div>
    );
  }
}

export default LocationField;
