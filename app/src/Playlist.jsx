import React, { Component } from 'react';
import { getConcerts } from './actions.js';
import PlaylistSong from './PlaylistSong.jsx';


class Playlist extends Component {
  render() {
    // We will change this to render each city once we are passing props
    const cityIndex = this.props.index;
    const concerts = getConcerts();
    const cityPlaylist = concerts[cityIndex].playlist;

    const playlist = cityPlaylist.map((artist, index) => {
      const firstSongResult = artist[0];
      const songTitle = firstSongResult.name;
      const songArtist = firstSongResult.artists[0].name;
      const songPreviewUrl = firstSongResult.preview_url;

      return <PlaylistSong title={songTitle} artist={songArtist} previewurl={songPreviewUrl} index={index} key={index} />;
    });

    return (
      <div className="container is-paddingless">
        <div className="box is-marginless is-radiusless">
          <div className="columns">
            <div className="column is-1 has-text-centered">
              <small>#</small>
            </div>
            <div className="column is-4">
              <small>Artist</small>
            </div>
            <div className="column is-4">
              <small>Title</small>
            </div>
            <div className="column is-3 has-text-right" />
          </div>
        </div>
        {playlist}
      </div>
    );
  }
}

export default Playlist;

const fakeSongData = [
  {
    title: 'The Cool Song',
    artist: 'Presidents of the United States of America',
  },
  {
    title: 'Something Really Good',
    artist: 'Fake Artist',
  },
  {
    title: 'Something Really Bad',
    artist: 'The Best Artist',
  },
];
