import {
  setState,
  getState
} from './appState';
import Api from './api.js';

// WHENEVER YOU WANT TO CHANGE THE STATE YOU MUST DEFINE AN ACTION THAT DOES SO
// KEEP YOUR VIEWS DUMB
// Actions up, data down

export function setView(view) {
  setState({
    view
  });
}

export function addLocationField() {
  const currentLocations = getState().locations;
  const newLocations = currentLocations.concat([{
    city: '',
    start_date: '',
    end_date: ''
  }]);
  setState({
    locations: newLocations,
  });
}

export function updateLocationField(index, city, start_date, end_date) {
  const currentLocations = getState().locations;
  setState({
    locations: [
      ...currentLocations.slice(0, index),
      {
        city,
        start_date,
        end_date
      },
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

export function updateConcertIndex(number, totalEvents) {
  const currentIndex = getState().concerts_view_index;
  let newIndex = 0;

  if (currentIndex <= 0 && number === -1) {
    newIndex = totalEvents - 1;
  } else {
    newIndex = currentIndex + number;
  }

  setState({
    concerts_view_index: newIndex,
  });
}

// export function 

export function storeFormDataAsync() {
  Api.post('/trip', {
    locations: getState().locations,
    genres: getState().genres,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Prints out response
      console.log(data);
      const concerts = data.concerts[0];
      console.log('concerts', concerts);

      setState({ concerts });
    })
    .then(() => setView('itinerary'));
}

export function userRegister(firstname, lastname, email, password, confirmPassword) {
  setState({
    user: { firstname, lastname, email },
  });
  Api.post('/new_user', {
    firstname, lastname, email, password, confirmPassword,
  }).then((response) => {
    return response.json();
  });
}

export function getUserName() {
  const userName = getState().firstname;
}

export function userLogin(email, password) {
  Api.post('/login', {
    email, password,
  }).then((response) => {
    console.log(response);
    return response.json();
    //here we should get the user's first name in the response (resonse.body.firstname)
    //such that we can get the username to display in nav
  });
}
