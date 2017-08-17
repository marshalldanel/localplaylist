import React, { Component } from 'react';
import PlaylistSong from './PlaylistSong.jsx';

class Playlist extends Component {

  render() {
    // We will change this to render each city once we are passing props

    const playlist = fakeSongData.map((song, index) => {
      return <PlaylistSong song={song} index={index} key={index} />
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
