require('../styles/main.scss');
import {setState}  from './appState';

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