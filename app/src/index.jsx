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
  locations: [{city:"Toronto",date:"12/12/12"},{city:"Toronto",date:"12/12/12"}],
  genres: [],
  concerts: [],
  songs: [],
});