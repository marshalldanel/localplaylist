const express = require('express');
require('dotenv').config();
const rp = require('request-promise');
const querystring = require('querystring');
// const cookieParser = require('cookie-parser');
const shortid = require('shortid');

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = '/';

// Spotify Web Node module

const Spotify = require('spotify-web-api-node');

const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI,
});

// Request authorization

app.get('/spotify', (req, res) => {
  const state = shortid.generate();
  const scope = 'user-read-private user-read-email';

  res.redirect(`https://accounts.spotify.com/authorize?${ 
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: 'https://localhost:3000/auth',
      state: state
    })}`);
});

// Requests refresh and access tokens after checking the state parameter

app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(`/#${ 
      querystring.stringify({
        error: 'state_mismatch'
      })}`);
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization: `Basic ${  new Buffer(client_id + ':' + client_secret).toString('base64')}`,
      },
      json: true,
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {

        const access_token = body.access_token;
        const refresh_token = body.refresh_token;

        const options = {
          url: 'https://api.spotify.com/v1/me',
          headers: {
            'Authorization': 'Bearer ' + access_token
          },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function (error, response, body) {
          console.log(body);
        });

        // Pass the token to the browser to make requests from there
        // res.redirect('/#' +
        //   querystring.stringify({
        //     access_token: access_token,
        //     refresh_token: refresh_token
        //   }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});


app.get('/refresh_token', (req, res) => {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${  new Buffer(client_id + ':' + client_secret).toString('base64')}`,
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token,
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

// const client_id = ;
// // res.json({ message: 'hooray! welcome to our api!' });
// request.get({ url: `https://accounts.spotify.com/authorize/?client_id=${client_id}&response_type=code&redirect_uri=https://localhost:3000/auth` },
//   function(error, response, body) {
//     console.log(res.json(body));
//   });

// const client_secret = 'CLIENT_SECRET'; // Your secret
// const client_id = 'CLIENT_ID'; // Your client id
