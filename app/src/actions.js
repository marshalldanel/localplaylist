import { setState, getState } from './appState';

// WHENEVER YOU WANT TO CHANGE THE STATE YOU MUST DEFINE AN ACTION THAT DOES SO
// KEEP YOUR VIEWS DUMB
// Actions up, data down

export function setView(view) {
  setState({ view });
}

export function addLocationField() {
  const currentLocations = getState().locations;
  const newLocations = currentLocations.concat([{ city: '', start_date: '', end_date: '' }]);
  setState({ locations: newLocations });
}

export function updateLocationField(index, city, start_date, end_date) {
  const currentLocations = getState().locations;
  setState({
    locations: [
      ...currentLocations.slice(0, index),
      { city, start_date, end_date },
      ...currentLocations.slice(index + 1),
    ],
  });
}

export function updateGenreField(genre) {
  const currentGenres = getState().genres;
  const genreIndex = currentGenres.indexOf(genre);

  if (genreIndex < 0) {
    currentGenres.push(genre);
    setState({
      genres: currentGenres,
    });
  } else {
    currentGenres.splice(genreIndex, 1);
    setState({
      genres: currentGenres,
    });
  }
}


// export function storeFormDataAsync() {
//   Api.post('/itinerary', { locations: getState().locations, genres: getState().genres }).then(() => setView('usertrips'));
// }

