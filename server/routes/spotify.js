const express = require('express');
const expressSession = require('express-session');

const router = express.Router();
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const { makePrivatePlaylist } = require('./spotifyHelpers');

require('dotenv').config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://0.0.0.0:3000/callback';

// user has refresh token until deserialized is called........

// Spotify Web Node module
module.exports = (knex) => {
  passport.serializeUser((user, done) => {
    console.log('serializeeeeeee', user);
    done(null, user.spotify_id);
  });

  passport.deserializeUser((spotify_id, done) => {
    console.log(spotify_id);
    knex('users').where('spotify_id', spotify_id)
      .then((users) => {
        console.log('deeeeserralizeeeeee', users[0]);
        done(null, users[0]);
      });
  });

  passport.use(new SpotifyStrategy({
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: redirect_uri,
  },
  (accessToken, refreshToken, profile, done) => {
    knex('users').where('spotify_id', profile.id)
      .then((users) => {
        if (!users.length) {
          return knex('users').insert({
            first_name: profile.displayName,
            spotify_id: profile.id,
            // access_token: accessToken,
            // refresh_token: refreshToken,
          }).returning('*');
        }
        return users;
      })
      .then((users) => {
        console.log("allusers",users);
        users[0].access_token = accessToken;
        users[0].refresh_token = refreshToken;
        return users[0];
      })
      .then((user) => {
        console.log(user);
        return done(null, user);
      });
  }));

  router.get('/spotify-userAuth',
    passport.authenticate('spotify', {
      scope: ['user-read-private', 'playlist-modify-private', 'playlist-modify-private'],
      showDialog: true,
      display: 'popup',
    }));

  router.get('/callback',
    passport.authenticate('spotify', {
      // successRedirect: '/',
      failureRedirect: '/',
    }),
    (req, res) => {
      res.status(204).send();
    });

  router.get('/current-user', (req, res) => {
    res.json(req.user);
  });

  router.post('/save-playlist', (req, res) => {
    console.log("This is the id", req.user);
    makePrivatePlaylist(req.user.spotify_id, req.user.access_token, req.user.refresh_token);

    res.status(200).send();
  });

  return router;
};
