import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import {setState}  from './appState';
require('../styles/application.scss');

if(module.hot) {
  module.hot.accept();
}

setState({
  view: 'locations',
  user: null,
  locations: [{ city: '', start_date: '', end_date: '' }],
  genres: [],
  concerts: [],
  songs: [],
});