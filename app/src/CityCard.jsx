import React, { Component } from 'react';
import ConcertMarquee from './ConcertMarquee.jsx';
import Playlist from './Playlist.jsx';

class CityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unrolled: false,
    };
  }

  render() {
    const trip = this.props.trip;
    const boxClass = 'box is-primary is-outlined is-large';

    return (
      <div>
        <div className="container">
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
        </div>
        {(this.state.unrolled ? (
          <div>
            <ConcertMarquee />
            <Playlist />
          </div>
        ) : null)}
      </div>
    );
  }
}
export default CityCard;
