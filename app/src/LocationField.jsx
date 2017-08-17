import React, {Component} from 'react';
import { updateLocationField } from './actions.js';


class LocationField extends Component{
  constructor() {
    super();

    this.state = {
      city: '',
      start_date: '',
      end_date: '',
    }
  }

  updateField() {
    updateLocationField(this.props.index, this.state.city, this.state.start_date, this.state.end_date);
  }

  render() { 
    // will need to add input verification
    return(
      <div className="location-fields">
        <div className="columns">
          <div className="column"> 
            <div className="field">
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
                <div className="control">
                  <input className="date input" type="date" placeholder="dd/mm/yyyy" name="start_date"
                    onChange={(event) => {
                      this.setState({
                        start_date: event.target.value
                      }, this.updateField);
                    }}/>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
                <div className="control">
                  <input className="date input" type="date" placeholder="dd/mm/yyyy" name="end_date"
                    onChange={(event) => {
                      this.setState({
                        end_date: event.target.value
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
