import React, {Component} from 'react';
import CityCard from './CityCard.jsx';

class CitiesResults extends Component {

  render() {

    const locations = this.props.locations;
    
    // Beware of this if statement! It will only render a card, if trip.city = true
    // This is being used as a filter so that the null location in state isn't created. (There is always a null location...)

    const trips = locations.map((trip, index) => {
      if (trip.city) {
        return <CityCard key={index} trip={trip} />
      }
    })
    
    return (
      <div className="section is-paddingless">
        <div className="container is-paddingless">
          {trips}
        </div>
      </div>
    );
  }
}

export default CitiesResults;