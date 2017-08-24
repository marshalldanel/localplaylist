import React, { Component } from 'react';
import CityCard from './CityCard.jsx';
import { getConcerts } from './actions.js';


class CitiesResults extends Component {
  render() {
    const returnedQuery = getConcerts();


    const trips = returnedQuery.map((locations, index) => {
      return (<CityCard key={index} trip={locations} index={index} />);
    });

    return (
      <section className="cities-results animated fadeIn">
        <div className="hero is-small is-primary is-bold">
          <div className="hero-body">
            <h2 className="title has-text-centered"> Your Trip </h2>
          </div>
        </div>
        <div className="section is-paddingless">
          {trips}
        </div>
      </section>
    );
  }
}

export default CitiesResults;
