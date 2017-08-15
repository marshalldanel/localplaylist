import React, {Component} from 'react';

class ConcertCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const concert = this.props.concert;

    return (

      <div className="column is-4">
       <div className="card">
              <div className="card-content concert-card">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-96x96">
                      <img src={concert.image.medium.url} alt="Image"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{concert.title}</p>
                    <p className="subtitle is-6">
                      <a href={concert.venue_url}>{concert.venue_name}</a>
                      <br/>
                      {concert.start_time}
                      <br/>
                      {concert.venue_address}, {concert.city_name}
                    </p>

                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Venue Info</a>
                <a className="card-footer-item is-danger">Get Tickets</a>
              </footer>
            </div>
          </div>

    );
  }
}
export default ConcertCard;