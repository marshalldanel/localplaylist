import {
  setState,
  getState,
} from './appState';

// WHENEVER YOU WANT TO CHANGE THE STATE YOU MUST DEFINE AN ACTION THAT DOES SO
// KEEP YOUR VIEWS DUMB
// Actions up, data down

export function setView(view) {
  setState({
    view,
  });
}

export function addLocationField() {
  const currentLocations = getState().locations;
  const newLocations = currentLocations.concat([{
    city: '',
    start_date: '',
    end_date: '',
  }]);
  setState({
    locations: newLocations,
  });
}

export function updateLocationField(index, city, start_date, end_date) {
  const currentLocations = getState().locations;
  setState({
    locations: [
      ...currentLocations.slice(0, index), // get locations before index
      {
        city,
        start_date,
        end_date,
      },
      ...currentLocations.slice(index + 1), // get locations after index 
    ],
  });
}

export function storeFormDataAsync() {
  Api.post('/itinerary', { locations: getState().locations, genres: getState().genres }).then(() => setView('usertrips'));
}

