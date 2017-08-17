import React, { Component } from 'react';
import { updateGenreField } from './actions.js';

class GenreSelect extends Component {
  render() {
    const items = ['rock', 'pop', 'hip-hop', 'indie', 'electronic', 'jazz', 'classical', 'country', 'folk', 'latin'];
    const genres = this.props.genres;

    const genreBoxes = items.map((item, index) => {
      let buttonClass = 'button is-primary is-outlined';
      if (genres.indexOf(item) > -1) {
        buttonClass = 'button is-primary';
      }
      return (<div key={index} className="column is-one-quarter">
        {/* eslint-disable jsx-a11y/interactive-supports-focus */}
        <div
          className={buttonClass}
          role="button"
          onClick={() => {
            updateGenreField(item);
          }}
        >
          {/* eslint-enable */}
          {item}
        </div>
      </div>
      );
    });


    return (
      <div className="container">
        <h2 className="subtitle has-text-centered is-size-2">Select your favourite genres</h2>
        <div className="columns is-multiline">
          {genreBoxes}
        </div>
      </div>
    );
  }
}
export default GenreSelect;
