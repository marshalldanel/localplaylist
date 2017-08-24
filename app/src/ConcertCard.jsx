import React, { Component } from 'react';
import placeholder from '../static/placeholder.png';

class ConcertCard extends Component {
  render() {
    const concert = this.props.concert;
    const thumbnail = concert.image ? concert.image.medium.url : placeholder;
    let title = concert.title;

    if (title.length > 39) {
      const subtitle = title.substring(0, 39);
      title = `${subtitle}...`;
    }

    return (

      // Conditionals should be added to all null values

      <div className="column is-4">
        <div className="card">
          <div className="card-content concert-card">
            <div className="media">
              <div className="media-left">
                <figure className="image is-96x96">
                  <img src={thumbnail} alt="Concert Thumbnail" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-5">{title}</p>
                <p className="subtitle is-6">
                  <a href={concert.venue_url}>{concert.venue_name.replace(', The', '')}</a>
                  <br />
                  <small>
                    {concert.start_time || ''}
                    <br />
                    {concert.venue_address || ''}, {concert.city_name || ''}
                  </small>
                </p>

              </div>
            </div>
          </div>
          <footer className="card-footer">
            <a href={concert.venue_url} className="card-footer-item">Venue Info</a>
            <a href={concert.url} className="card-footer-item is-danger">Get Tickets</a>
          </footer>
        </div>
      </div>

    );
  }
}
export default ConcertCard;
