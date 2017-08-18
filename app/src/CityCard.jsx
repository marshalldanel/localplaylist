import React, { Component } from 'react';
import ConcertMarquee from './ConcertMarquee.jsx';

class CityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unrolled: false,
    };
  }

  render() {
    const trip = this.props.trip;
    let boxClass = "box is-primary is-outlined is-large";

    return (
      <div>
        <box
          className={boxClass}
          onClick={() => { this.setState({ unrolled: !this.state.unrolled }); }}
        >
          <div className="columns">
            <div className="column is-1">
              <span className="icon">
                <i className="fa fa-angle-down" />
              </span>
            </div>
            <div className="column is-8">
              <span>{trip.city}</span>
            </div>
            <div className="column has-text-right">
              <span>{trip.start_date} - {trip.end_date}</span>
            </div>
          </div>
        </box>
        {(this.state.unrolled ? (
          <div>
            <ConcertMarquee />
          </div>
        ) : null)}
      </div>
    );
  }
}
export default CityCard;
