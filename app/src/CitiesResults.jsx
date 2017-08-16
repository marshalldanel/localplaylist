import React, {Component} from 'react';
import CityCard from './CityCard.jsx'

class CitiesResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    // We will change this to render each city once we are passing props

    let trips = fakeTripData.map((trip) => {
      return <CityCard trip={trip}/>
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

const fakeTripData = [
  { 
    city: "Vancouver",
    start_date: "Oct. 16, 1987",
    end_date: "Oct. 31, 1987"
  },
  {
    city: "Seattle",
    start_date: "Oct. 31, 1987",
    end_date: "Nov 7, 1987"
  },
  {
    city: "Portland",
    start_date: "Nov. 7, 1987",
    end_date: "Nov 31, 1987"
  },
]