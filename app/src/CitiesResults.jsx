import React, {Component} from 'react';
import CityCard from './CityCard.jsx'

class CitiesResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let locations = this.props.locations
    
    // Beware of this if statement! It will only render a card, if trip.city = true
    // This is being used as a filter so that the null location in state isn't created. (There is always a null location...)

    let trips = locations.map((trip, index) => {
      if (trip.city) {
        return <CityCard key={index} trip={trip}/>
      }
    })
    
    return (
      <div className="section">
        <div className="container">
          {trips}
        </div>
      </div>
    );
  }
}

export default CitiesResults;