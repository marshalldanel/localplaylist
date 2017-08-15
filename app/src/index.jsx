import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import {setState}  from './appState';
require('../styles/application.scss');

if(module.hot) {
  module.hot.accept();
}

setState({
  view: '',
  user: null,
  locations: [],
  genres: [],
  concerts: [],
  songs: [],
});