import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { setState } from './appState';

//Fake concert data as per API. 

const fakeData = require('./fakedata.js');
const concerts = fakeData.concerts[0];


require('../styles/application.scss');

if (module.hot) {
  module.hot.accept();
}

setState({
  view: 'locations',
  user: null,
  locations: [{ city: '', start_date: '', end_date: '' }],
  genres: [],
  conerts: concerts,
  concerts_view_index: 0,
  songs: [],
});



