import React, {Component} from 'react';

class PlaylistSong extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const song = this.props.song;
    const index = this.props.index + 1;

    return (

      <div className="box is-marginless is-radiusless">
        <div className="columns">
          <div className="column is-1 has-text-centered">
            {index}
          </div>
          <div className="column is-4">
            {song.artist}
          </div>
          <div className="column is-4">
            {song.title}
          </div>
          <div className="column is-3 has-text-right">
            <span className="icon">
              <i className="fa fa-play-circle"></i>
            </span>  
            <span className="icon">
              <i className="fa fa-stop-circle"></i>
            </span> 
            <span className="icon">
              <i className="fa fa-trash"></i>
            </span> 
          </div>
        </div> 
      </div>
    );
  }
}
export default PlaylistSong;