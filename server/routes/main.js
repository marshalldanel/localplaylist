const express = require('express');
const trip = require('./trip.js');
const playlist = require('./playlist.js');

const router = express.Router();

module.exports = (knex) => {
  router.post('/trip', (req, res) => {
    const { saveTrip } = trip(knex);
    const { savePlaylist } = playlist(knex);
    // const locations = req.location;
    const locations = [
      { city: 'vancouver', start_date: '20170820', end_date: '20170822' },
      { city: 'toronto', start_date: '20170822', end_date: '20170823' },
      { city: 'seattle', start_date: '20170824', end_date: '20170825' },
    ];

    // const genres = req.genre;
    const genres = [
      'Rock',
      'Rap',
    ];

    const categories = genres.map(genre => `music_${genre.toLowerCase()}`).join(',');

    const playlistData = locations.map((location) => {
      return {
        name: location.city,
        city: location.city,
        start_date: location.start_date,
        end_date: location.end_date,
      };
    });

    const tripData = {
      name: 'name of trip',
      cookie: req.session.user_cookie,
    };

    const getQuery = city => locations.filter(loc => loc.city === city).map((_location) => {
      _location.categories = categories;
      return _location;
    })[0];

    saveTrip(tripData).then((trip_id) => {
      return Promise.all(playlistData.map(playlist => savePlaylist(Object.assign(playlist, { trip_id: trip_id[0] }), getQuery(playlist.city))));
    }).then((concerts) => {
      const concertData = { concerts, playlist: playlistData };
      res.json(concertData);
    });
  });

  return router;
};
