const SpotifyWebApi = require('spotify-web-api-node');

const express = require('express');

const router = express.Router();
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

require('dotenv').config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://0.0.0.0:3000/callback';

let ACCESS_TOKEN = "";
let REFRESH_TOKEN = "";
// Spotify Web Node module
module.exports = () => {

  const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    accessToken: '',
  });

  spotifyApi.clientCredentialsGrant()
    .then((data) => {
      console.log("The access token is: ", data.body['access_token']);
      console.log("Token expires in: ", data.body['expires_in']);
      spotifyApi.setAccessToken(data.body['access_token']);
      console.log("our spotify info is: ", spotifyApi);
    }, (err) => {
      console.log('something went wrong :( >>> ', err);
    });

  function getArtistIds(artistsLists) {
    artistsLists.forEach((artistList) => {
      return Promise.all(artistList.map((artist) => {
        spotifyApi.searchArtists(artist)
          .then((data) => {
            console.log('Your artist and their id is:', data.body);
          }, (err) => {
            console.log(err);
          })
      }));
    });
  }

  console.log(getArtistIds([['Lady Gaga', 'Katy Perry', 'The Neighbourhood'],['Michael Jackson', 'Prince', 'Elvis Presley']]));
  //     )
  //   )).then(tracksList => {
  //     console.log('tracksList', tracksList);
  //   })
  // })
  // .then(tracksLists => 
  //   console.log('tracksssssListsssss', tracksLists)
  // }




















  //spotify authorization - this only happens when a user want to login
  passport.use(new SpotifyStrategy({
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: redirect_uri,
  },
  (accessToken, refreshToken, profile, done) => {
    ACCESS_TOKEN = accessToken;
    REFRESH_TOKEN = refreshToken;
    console.log("access token: ", ACCESS_TOKEN);
    console.log("refresh token: ", REFRESH_TOKEN);
  }));

  router.get('/spotify-userAuth',
    passport.authenticate('spotify'),
    (req, res) => {});

  router.get('/callback',
    passport.authenticate('spotify', {
      failureRedirect: '/',
    }),
    (req, res) => {
      console.log('success i guess');
      res.redirect('/');
    });

  return router;
};