import React, { Component } from 'react';
import { setView, storeFormDataAsync } from './actions.js';

class Button extends Component {
  render() {
    let isButton;

    if (this.props.view === 'locations') {
      isButton = <a className="button is-primary is-centred fixed-width-100" onClick={() => { setView('genres'); }}><span>Select Genres</span></a>;
    } else if (this.props.view === 'genres') {
      isButton = <a className="button is-primary is-centred fixed-width-100" onClick={() => { storeFormDataAsync(); }}><span>See your trip!</span></a>;
    } else {
      isButton = <div />;
    }

    return (
      <div className="columns">
        <div className="column" />
        <div className="column is-2">
          {isButton}
        </div>
        <div className="column" />
      </div>
    );
  }
}
export default Button;
