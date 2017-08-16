import React, {Component} from 'react';
import { updateLocationField } from './actions.js';


class LocationField extends Component{
  constructor() {
    super();

    this.state = {
      city: '',
      date: ''
    }
  }

  updateField() {
    updateLocationField(this.props.index, this.state.city, this.state.date);
  }

  render() { 
    // will need to add input verification
    return(
      <div className="location-fields">
        <div className="columns">
          <div className="column"> 
            <div className="field">
              <label className="label">City</label>
                <div className="control"> 
                  <input className="city input" type="text" placeholder="i.e. Vancouver" name="city"
                    onChange={(event) => {
                      this.setState({
                        city: event.target.value
                      }, this.updateField);
                    }}/>
                </div>
              </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Date</label> 
                <div className="control">
                  <input className="date input" type="date" placeholder="dd/mm/yyyy" name="date"
                    onChange={(event) => {
                      this.setState({
                        date: event.target.value
                      }, this.updateField);
                    }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

}

export default LocationField;
