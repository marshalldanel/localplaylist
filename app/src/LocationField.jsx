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
        <input className="city" placeholder="i.e. Vancouver" name="city"
          onChange={(event) => {
            this.setState({
              city: event.target.value
            }, this.updateField);
          }}/>
        <input className="date" placeholder="dd/mm/yyyy" name="date"
          onChange={(event) => {
            this.setState({
              date: event.target.value
            }, this.updateField);
          }}/>
          {/* {console.log("This is my new location: ", newLocation)} */}
      </div>
    );
  };

}

export default LocationField;
