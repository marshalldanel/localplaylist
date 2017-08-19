import React, { Component } from 'react';
import ConcertCard from './ConcertCard.jsx';
import { updateConcertIndex, getConcerts, getConcertViewIndex } from './actions.js';

class ConcertMarquee extends Component {
  render() {
    const ConcertObjNum = 0; // if concerts has more than one Obj, it needs to select one

    const concertData = getConcerts();
    const playlistData = concertData[ConcertObjNum];
    const events = concertData[ConcertObjNum].eventResponse.events.event;


    const concertViewIndex = getConcertViewIndex();


    const maxInView = 3;
    const start = concertViewIndex % events.length;
    const end = start + maxInView;

    const concerts = events
      .slice(start, end)
      .concat(events.slice(0, Math.max(0, end - events.length)))
      .map((event, index) => {
        return (
          <ConcertCard
            key={index}
            concert={event}
          />);
      });

    const numberOfPages = Math.ceil(events.length / maxInView);
    const currentPage = (Math.floor(start / maxInView) + 1);
        console.log(start);
      //  console.log(currentPage);

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
