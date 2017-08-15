import React, {Component} from 'react';

class ConcertMarquee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    // We will change this to render each concert once we are passing props

    // let concerts = this.props.concerts.map((concert) => {
    //   return <ConcertCard concert={concert}/>
    // })
    
    return (
      <div className="container">
        <div className="columns">
          
          {/* {concerts} */}

          {/* Start of example cards */}

          <div className="column is-4">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Component
                </p>
                <a className="card-header-icon">
                  <span className="icon">
                    <i className="fa fa-angle-down"></i>
                  </span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
                  <br/>>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Save</a>
                <a className="card-footer-item">Edit</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>

          <div className="column is-4">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Component
                </p>
                <a className="card-header-icon">
                  <span className="icon">
                    <i className="fa fa-angle-down"></i>
                  </span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
                  <br/>>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Save</a>
                <a className="card-footer-item">Edit</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>

          <div className="column is-4">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Component
                </p>
                <a className="card-header-icon">
                  <span className="icon">
                    <i className="fa fa-angle-down"></i>
                  </span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
                  <br/>>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Save</a>
                <a className="card-footer-item">Edit</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>

          {/* End of example cards */}

        </div>
      </div>
    );
  }
}
export default ConcertMarquee;