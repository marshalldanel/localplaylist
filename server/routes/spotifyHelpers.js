const SpotifyWebApi = require('spotify-web-api-node');

require('dotenv').config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://0.0.0.0:3000/callback';

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

function anonTrip() {
  spotifyApi.clientCredentialsGrant()
    .then((data) => {
      spotifyApi.setAccessToken(data.body.access_token);
      console.log('our spotify info is: ', spotifyApi);
    }, (err) => {
      console.log('something went wrong :( >>> ', err);
      process.exit(-1); // if we don't have a working spotify credentials grant, all is lost.
    });
}

// function userTrip(accessToken, refreshToken) {
//   spotifyApi.setCredentials({
//     accessToken,
//     refreshToken,
//   });
// }

function topThreeTracks(trackList) {
  const artistTracks = trackList.body.tracks;
  const artistTopThree = artistTracks.slice(0, 3);
  return artistTopThree;
}

function getTopThreeTracksForArtistOrUndefined(artist) {
  return getArtistId(artist)
    .then((artistResults) => {
      if (artistResults.total === 0) {
        return undefined;
      }
      return getTopTracks(artistResults.items[0].id)
        .then(topThreeTracks);
    });
}

function getTopTracks(artistId) {
  return spotifyApi.getArtistTopTracks(artistId, 'CA');
}

function getArtistId(artist) {
  return spotifyApi.searchArtists(artist)
    .then((data) => {
      return data.body.artists;
    });
}

function getArtistTracks(ALL) {
  return Promise.all(ALL.map((setOfArtists) => {
    return Promise.all(setOfArtists.map(getTopThreeTracksForArtistOrUndefined))
      .then((data) => {
        return data.filter(artist => artist !== undefined);
      });
  }));
}

function setRefeshToken(data) {
  spotifyApi.setRefreshToken(data);
}

function setAccessToken(data) {
  spotifyApi.setAccessToken(data);
}

module.exports = {
  getArtistTracks,
  anonTrip,
  // setAccessToken,
  // setRefeshToken,
};
