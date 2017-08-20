const Spotify = require('spotify-web-api-node');

const express = require('express');

const router = express.Router();
// require('dotenv').config();
// const rp = require('request-promise');
// const querystring = require('querystring');
// const cookieParser = require('cookie-parser');
// const shortid = require('shortid');

// const client_id = process.env.SPOTIFY_CLIENT_ID;
// const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
// const redirect_uri = 'https://localhost:3000/callback';
const STATE_KEY = 'spotify_auth_state';
// spotify api wrapper

// Spotify Web Node module
module.exports = () => {
  const spotifyApi = new Spotify({
    clientId: '214dbc817610429dacd2a605dffc61b4',
    clientSecret: '709da82458df4728b8d53fece3c0d723',
    redirectUri: 'https://localhost:3000/callback',
    accessToken: 'BQArbj1_iKNl9wBQArbj1_iKNl9wo9B609SA-Gkm9gIiLk_nUVd_7J1cTsI-Hzx0XSbLhuCZPazriX9t3qe2K4vI2a12TQyMionwo9B609SA-Gkm9gIiLk_nUVd_7J1cTsI-Hzx0XSbLhuCZPazriX9t3qe2K4vI2a12TQyMionw',

  });
  console.log(spotifyApi);
  // Request authorization
  // const state = req.session.user_cookie;
  const scopes = ['user-read-private', 'user-read-email'];

  router.get('/spotify', (req, res) => {
    const state = req.session.user_cookie;
    // res.header("Acces-Control-Allow-Origin", "*");
    res.cookie(STATE_KEY, state);
    res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
  });

  router.get('/search', (req, res) => {
    spotifyApi.searchTracks('artist:Drake')
      .then((data) => {
        console.log('search', data.body);
      })
      .catch((error) => {
        console.log('error', error);
      });
  });

  router.get('/callback', (req, res) => {
    const {
      code,
      state,
    } = req.query;
    const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
    if (state === null || state !== storedState) {
      console.log('lol');
    } else {
      spotifyApi.authorizationCodeGrant(code)
        .then((data) => {
          const {
            expires_in,
            access_token,
            refresh_token,
          } = data.body;
          spotifyApi.setAccessToken(access_token);
          spotifyApi.setRefreshToken(refresh_token);
          res.redirect('/');
        })
        .catch((error) => {
          console.log('yo');
          res.redirect('https://www.google.com');
        });
    }
  });

  return router;
};


// //

// router.get('/spotify', (req, res) => {
//     // const state = req.session.user_cookie;
//     // res.header("Acces-Control-Allow-Origin", "*");
//     // res.cookie(STATE_KEY, state);
//     spotifyApi.clientCredentialsGrant()
//       .then((data) => {
//         console.log('expires in: ', data.body.expires_in);
//         console.log('access token: ', data.body.access_token);

//         spotifyApi.setAccessToken(data.body.access_token);
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//   });

//   router.get('/search', (req, res) => {
//     spotifyApi.searchTracks('artist:Drake')
//       .then((data) => {
//         console.log('search', data.body);
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//   });


//   res.redirect(`https://accounts.spotify.com/authorize?${
//     querystring.stringify({
//       response_type: 'code',
//       client_id,
//       scope,
//       redirect_uri,
//       state,
//     })}`);
// });

// Requests refresh and access tokens after checking the state parameter

// app.get('/callback', (req, res) => {
//   const code = req.query.code || null;
//   const state = req.query.state || null;
//   const storedState = req.cookies ? req.cookies[stateKey] : null;

//   if (state === null || state !== storedState) {
//     res.redirect(`/#${ 
//       querystring.stringify({
//         error: 'state_mismatch'
//       })}`);
//   } else {
//     res.clearCookie(stateKey);
//     const authOptions = {
//       url: 'https://accounts.spotify.com/api/token',
//       form: {
//         code,
//         redirect_uri,
//         grant_type: 'authorization_code',
//       },
//       headers: {
//         Authorization: `Basic ${  new Buffer(client_id + ':' + client_secret).toString('base64')}`,
//       },
//       json: true,
//     };

//     request.post(authOptions, (error, response, body) => {
//       if (!error && response.statusCode === 200) {

//         const access_token = body.access_token;
//         const refresh_token = body.refresh_token;

//         const options = {
//           url: 'https://api.spotify.com/v1/me',
//           headers: {
//             'Authorization': 'Bearer ' + access_token
//           },
//           json: true
//         };

//         // use the access token to access the Spotify Web API
//         request.get(options, function (error, response, body) {
//           console.log(body);
//         });

//         // Pass the token to the browser to make requests from there
//         // res.redirect('/#' +
//         //   querystring.stringify({
//         //     access_token: access_token,
//         //     refresh_token: refresh_token
//         //   }));
//       } else {
//         res.redirect('/#' +
//           querystring.stringify({
//             error: 'invalid_token'
//           }));
//       }
//     });
//   }
// });


// app.get('/refresh_token', (req, res) => {
//   // requesting access token from refresh token
//   const refresh_token = req.query.refresh_token;
//   const authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//       Authorization: `Basic ${  new Buffer(client_id + ':' + client_secret).toString('base64')}`,
//     },
//     form: {
//       grant_type: 'refresh_token',
//       refresh_token,
//     },
//     json: true,
//   };

//   request.post(authOptions, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//       const access_token = body.access_token;
//       res.send({
//         'access_token': access_token,
//       });
//     }
//   });
// });


// // const client_id = ;
// // // res.json({ message: 'hooray! welcome to our api!' });
// // request.get({ url: `https://accounts.spotify.com/authorize/?client_id=${client_id}&response_type=code&redirect_uri=https://localhost:3000/auth` },
// //   function(error, response, body) {
// //     console.log(res.json(body));
// //   });

// const client_secret = 'CLIENT_SECRET'; // Your secret
// const client_id = 'CLIENT_ID'; // Your client id
