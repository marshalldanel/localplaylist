const express = require('express');
const expressSession = require('express-session');

const router = express.Router();
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
// const {} = require('./spotifyHelpers');

require('dotenv').config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://0.0.0.0:3000/callback';

// Spotify Web Node module
module.exports = (knex) => {
  passport.serializeUser((user, done) => {
    done(null, user.spotify_id);
  });

  passport.deserializeUser((spotify_id, done) => {
    knex('users').where('spotify_id', spotify_id)
      .then((users) => {
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
            access_token: accessToken,
            refresh_token: refreshToken,
          }).returning('*');
        }
        return users;
      })
      .then((users) => {
        return done(null, users[0]);
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
      successRedirect: '/',
      failureRedirect: '/',
    }),
    (req, res) => {
      res.status(204).send();
    });

  return router;
};
