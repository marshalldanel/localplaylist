import React, {Component} from 'react';

class PlaylistSong extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const song = this.props.song;

    return (
     <div className="container">
      <div className="box is-marginless is-radiusless">
        <div className="columns">
          <div className="column is-1 has-text-centered">
            # 1
          </div>
          <div className="column is-3">
            Artist Name
          </div>
          <div className="column is-5">
            Song Title
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
      <div className="box is-marginless is-radiusless">
        <div className="columns">
          <div className="column is-1 has-text-centered">
            # 1
          </div>
          <div className="column is-3">
            Artist Name
          </div>
          <div className="column is-5">
            Song Title
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
      <div className="box is-marginless is-radiusless">
        <div className="columns">
          <div className="column is-1 has-text-centered">
            # 1
          </div>
          <div className="column is-3">
            Artist Name
          </div>
          <div className="column is-5">
            Song Title
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
    </div>
    );
  }
}
export default PlaylistSong;