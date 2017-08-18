import React, { Component } from 'react';
import { setView, storeFormDataAsync } from './actions.js';

class Button extends Component {
  render() {
    let isButton;

    if (this.props.view === 'locations') {
      isButton = <button className="button is-primary column is-one-third is-centred" onClick={() => { setView('genres'); }}> Select Genres </button>;
    } else if (this.props.view === 'genres') {
      isButton = <button className="button is-primary column is-one-third is-centred" onClick={() => { storeFormDataAsync(); }}> See your trip! </button>;
    } else {
      isButton = <div />;
    }

    return (
      <div className="columns">
        <div className="column is-one-third" />
        {isButton}
        <div className="column is-one-third" />
      </div>
    );
  }
}
export default Button;
