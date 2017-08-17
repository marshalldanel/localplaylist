import React, {Component} from 'react';

class CityCard extends Component {
  
  render() {

    const trip = this.props.trip;

    return (
      <div className="box">
        <div className="columns">
          <div className="column is-1">
            <span className="icon">
              <i className="fa fa-angle-down"></i>
            </span>  
          </div> 
          <div className="column is-8">
            <span>{trip.city}</span>
          </div>
          <div className="column has-text-right">
            <span>{trip.start_date} - {trip.end_date}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default CityCard;