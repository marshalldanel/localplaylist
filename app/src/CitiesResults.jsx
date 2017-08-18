import React, {Component} from 'react';
import CityCard from './CityCard.jsx';

class CitiesResults extends Component {

  render() {

    const locations = this.props.locations;
    
    // Beware of this if statement! It will only render a card, if trip.city = true
    // This is being used as a filter so that the null location in state isn't created. (There is always a null location...)

    const trips = locations.map((trip, index) => {
      if (trip.city) {
        return (<CityCard key={index} trip={trip} concertData={this.props.concertData} />);
      }
    });

    return (
      <section className="cities-results">
        <div className="hero is-small is-primary is-bold">
          <div className="hero-body">
            <h2 className="title has-text-centered"> Your Trip </h2>
          </div>
        </div>
        <div className="section is-paddingless">
          <div className="container is-paddingless">
            {trips}
          </div>
        </div>
      </section> 
    );
  }
}

export default CitiesResults;
