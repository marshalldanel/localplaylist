const express = require('express');
const trip = require('./trip.js');
const playlist = require('./playlist.js');

const router = express.Router();

module.exports = (knex) => {
  router.post('/trip', (req, res) => {
    const {
      saveTrip
    } = trip(knex);
    const {
      savePlaylist
    } = playlist(knex);

    const locations = req.body.locations;
    const genres = req.body.genres;

    const categories = genres.length ? genres.map(genre => `music_${genre.toLowerCase()}`).join(',') : 'music';


    const playlistData = locations.map((location) => {
      return {
        name: location.city,
        city: location.city,
        start_date: location.start_date,
        end_date: location.end_date,
      };
    });

    const tripData = {
      name: 'Your trip',
      cookie: req.session.user_cookie,
    };

    const getQuery = city => locations.filter(loc => loc.city === city).map((_location) => {
      _location.categories = categories;
      return _location;
    })[0];

    saveTrip(tripData).then((trip_id) => {
      return Promise.all(playlistData.map(playlist => savePlaylist(Object.assign(playlist, {
        trip_id: trip_id[0]
      }), getQuery(playlist.city))));
    }).then((concerts) => {
      const concertData = {
        concerts
      };
      //mapping concerts to artists array in order to pass array into /searchArtistId
      const playlistEvents = concertData.concerts[0][0].eventResponse.events.event;
      const eventArtists = playlistEvents
        .filter((event) => {
          return (!!event && !!event.performers && !!event.performers.performer && !!event.performers.performer.name);
        })
        .map((event) => {
          const artist = event.performers.performer.name;
          return artist;
        });
      console.log(eventArtists); //we need to pass eventArtists to spotify.js
      
      res.send(JSON.stringify(concertData));
    });
  });

  return router;
};
