import React, { Component } from 'react';
import LocationsList from './LocationsList.jsx';
import { setView, storeLocations } from './actions.js';
import GenresSelect from './GenreSelect.jsx';

class QuestionsContainer extends Component {
  render() {
    let currentView;
    switch (this.props.view) {
      case 'locations':
        currentView = <LocationsList locations={this.props.locations} />;
        break;
      case 'genres':
        currentView = <GenresSelect genres={this.props.genres} />;
        break;
    }

    return (
      <section className="section is-medium">
        {currentView}
        <button
          className="button is-primary"
          onClick={() => {
            setView('genres');
          }}
        >
          Next - Genres
        </button>
      </section>
    );
  }
}

export default QuestionsContainer;
