import React, { Component } from 'react';
import ConcertCard from './ConcertCard.jsx';
import { updateConcertIndex, getConcerts } from './actions.js';

class ConcertMarquee extends Component {
  render() {
    const concertData = getConcerts();
    const concertViewIndex = this.props.concertView;
    console.log(concertData);


    const events = concertData[0].events.event;
    const event = concertData[0].events.event[0];
    const maxInView = 3;
    const start = concertViewIndex % events.length;
    const end = start + maxInView;

    // const concertData = this.props.concertData;

    // const concertViewIndex = this.props.concertView;
    // const events = concertData.events.event;
    // const maxInView = 3;
    // const start = concertViewIndex % events.length;
    // const end = start + maxInView;

    const concerts = events
      .slice(start, end)
      .concat(events.slice(0, Math.max(0, end - events.length)))
      .map((concert, index) => {
        return (
          <ConcertCard key={index} concert={concert}
          />)
      });

    const numberOfPages = Math.ceil(events.length / maxInView);
    const currentPage = Math.floor(start / numberOfPages) + 1;

    return (
      <div className="section">
        <div className="columns">
          <div className="column is-1" />
          <div className="column is-10">
            <div className="columns concert-scroller">
              {concerts}
            </div>
          </div>
          <div className="column is-1" />
        </div>
        <div className="has-text-centered">
          <span className="icon icon-colour-green">
            <i
              className="fa fa-chevron-left"
              aria-hidden="true"
              role="button"
              onClick={() => {
                updateConcertIndex(-1, events.length);
              }}
            />
          </span>
          <span>{currentPage}/{numberOfPages}</span>
          <span className="icon icon-colour-green">
            <i
              className="fa fa-chevron-right"
              aria-hidden="true"
              role="button"
              onClick={() => {
                updateConcertIndex(1, events.length);
              }}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default ConcertMarquee;
