import React, {Component} from 'react';
import ConcertCard from './ConcertCard.jsx'

class ConcertMarquee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    // We will change this to render each concert once we are passing props

    // let concerts = this.props.concerts.map((concert) => {
    //   return <ConcertCard concert={concert}/>
    // })

    let concerts = fakeConcertData.search.events.event.map((concert) => {
      return <ConcertCard key={concert.id} concert={concert}/>
    })
    
    return (
      <div className="section">
        <div className="columns">
          <div className="column is-1">
          </div>
            <div className="column is-10">
              <div className="columns concert-scroller">
                {concerts}
              </div>
            </div>
          <div className="column is-1">
          </div>
        </div>
      </div>
    );
  }
}

var fakeConcertData = {
  "search": {
    "total_items": "4",
    "page_size": "10",
    "page_count": "1",
    "page_number": "1",
    "search_time": "0.041",
    "events": {
      "event": [
        {
          "-id": "E0-001-103671876-2",
          "title": "Pallbearer with Guests",
          "url": "http://vancouver.eventful.com/events/pallbearer-guests-/E0-001-103671876-2?utm_source=apis&utm_medium=apim&utm_campaign=apic",
          "start_time": "2017-08-15 21:00:00",
          "olson_path": "America/Vancouver",
          "venue_id": "V0-001-000299409-4",
          "venue_url": "http://vancouver.eventful.com/venues/the-cobalt-/V0-001-000299409-4?utm_source=apis&utm_medium=apim&utm_campaign=apic",
          "venue_name": "The Cobalt",
          "venue_display": "1",
          "venue_address": "917 Main Street",
          "city_name": "Vancouver",
          "region_name": "British Columbia",
          "region_abbr": "BC",
          "country_name": "Canada",
          "country_abbr2": "CA",
          "country_abbr": "CAN",
          "latitude": "49.2764902",
          "longitude": "-123.1000987",
          "geocode_type": "EVDB Geocoder",
          "all_day": "0",
          "created": "2017-06-09 14:30:16",
          "owner": "evdb",
          "modified": "2017-06-09 14:30:16",
          "performers": {
            "performer": {
              "id": "P0-001-000582315-9",
              "url": "http://concerts.eventful.com/Pallbearer?utm_source=apis&utm_medium=apim&utm_campaign=apic",
              "name": "Pallbearer",
              "short_bio": "Electronic / Heavy Metal / Rock",
              "creator": "evdb",
              "linker": "evdb"
            }
          },
          "image": {
            "url": "http://s4.evcdn.com/images/small/I0-001/004/744/155-7.jpeg_/pallbearer-55.jpeg",
            "width": "48",
            "height": "48",
            "thumb": {
              "url": "http://s4.evcdn.com/images/thumb/I0-001/004/744/155-7.jpeg_/pallbearer-55.jpeg",
              "width": "48",
              "height": "48"
            },
            "small": {
              "url": "http://s4.evcdn.com/images/small/I0-001/004/744/155-7.jpeg_/pallbearer-55.jpeg",
              "width": "48",
              "height": "48"
            },
            "medium": {
              "url": "http://s4.evcdn.com/images/medium/I0-001/004/744/155-7.jpeg_/pallbearer-55.jpeg",
              "width": "128",
              "height": "128"
            }
          },
          "privacy": "1"
        },
        {
          "-id": "E0-001-100991323-7",
          "title": "Rancid and Dropkick Murphys",
          "url": "http://vancouver.eventful.com/events/rancid-and-dropkick-murphys-/E0-001-100991323-7?utm_source=apis&utm_medium=apim&utm_campaign=apic",
          "start_time": "2017-08-15 16:30:00",
          "olson_path": "America/Vancouver",
          "venue_id": "V0-001-001077794-2",
          "venue_url": "http://vancouver.eventful.com/venues/thunderbird-stadium-/V0-001-001077794-2?utm_source=apis&utm_medium=apim&utm_campaign=apic",
          "venue_name": "Thunderbird Stadium",
          "venue_display": "1",
          "venue_address": "University Of British Columbia",
          "city_name": "Vancouver",
          "region_name": "British Columbia",
          "region_abbr": "BC",
          "country_name": "Canada",
          "country_abbr2": "CA",
          "country_abbr": "CAN",
          "latitude": "49.2648785",
          "longitude": "-123.2524963",
          "geocode_type": "EVDB Geocoder",
          "all_day": "0",
          "created": "2017-03-08 00:09:12",
          "owner": "evdb",
          "modified": "2017-06-24 22:01:41",
          "performers": {
            "performer": [
              {
                "id": "P0-001-000000551-8",
                "url": "http://concerts.eventful.com/Rancid?utm_source=apis&utm_medium=apim&utm_campaign=apic",
                "name": "Rancid",
                "short_bio": "Punk",
                "creator": "jfisher",
                "linker": "evdb"
              },
              {
                "id": "P0-001-000007715-3",
                "url": "http://concerts.eventful.com/Dropkick-Murphys?utm_source=apis&utm_medium=apim&utm_campaign=apic",
                "name": "Dropkick Murphys",
                "short_bio": "Punk / Acoustic / Folk Rock",
                "creator": "jfisher",
                "linker": "evdb"
              }
            ]
          },
          "image": {
            "url": "http://s4.evcdn.com/images/small/I0-001/004/211/979-6.jpeg_/rancid-79.jpeg",
            "width": "48",
            "height": "48",
            "thumb": {
              "url": "http://s4.evcdn.com/images/thumb/I0-001/004/211/979-6.jpeg_/rancid-79.jpeg",
              "width": "48",
              "height": "48"
            },
            "small": {
              "url": "http://s4.evcdn.com/images/small/I0-001/004/211/979-6.jpeg_/rancid-79.jpeg",
              "width": "48",
              "height": "48"
            },
            "medium": {
              "url": "http://s4.evcdn.com/images/medium/I0-001/004/211/979-6.jpeg_/rancid-79.jpeg",
              "width": "128",
              "height": "128"
            }
          },
          "privacy": "1"
        },
        {
          "-id": "E0-001-097088830-6@2017081520",
          "title": "SandyBone & The BreakDown",
          "url": "http://vancouver.eventful.com/events/sandybone-breakdown-/E0-001-097088830-6@2017081520?utm_source=apis&utm_medium=apim&utm_campaign=apic",
          "description": " The End of the Line jam is best little jam on a Tuesday night in the whole darn city far as I&#39;m concerned! For 10 years and counting Double D and yours truly have been hosting this night and it is a second home for us and the many who come to indulge. The music is always first and always great and the rest just follows naturally. Folks arrive from all around the world and find there way to The Prinny and our stage, go figure...Check it out if you haven&#39;t already and if you have, well, you know of what I speak. See y&#39;all down the line!",
          "start_time": "2017-08-15 20:30:00",
          "olson_path": "America/Vancouver",
          "venue_id": "V0-001-000610029-5",
          "venue_url": "http://vancouver.eventful.com/venues/princeton-pub-the-/V0-001-000610029-5?utm_source=apis&utm_medium=apim&utm_campaign=apic",
          "venue_name": "Princeton Pub, The",
          "venue_display": "1",
          "venue_address": "1901 Powell",
          "city_name": "Vancouver",
          "region_name": "British Columbia",
          "region_abbr": "BC",
          "postal_code": "V4S 4E7",
          "country_name": "Canada",
          "country_abbr2": "CA",
          "country_abbr": "CAN",
          "latitude": "49.2848352",
          "longitude": "-123.0654238",
          "geocode_type": "EVDB Geocoder",
          "all_day": "0",
          "recur_string": "on various days",
          "created": "2016-10-11 19:30:14",
          "owner": "evdb",
          "modified": "2017-03-25 10:18:15",
          "performers": {
            "performer": {
              "id": "P0-001-000077543-1",
              "url": "http://concerts.eventful.com/The-Breakdown?utm_source=apis&utm_medium=apim&utm_campaign=apic",
              "name": "The Breakdown",
              "short_bio": "Rock/Pop",
              "creator": "breakdownmusician07",
              "linker": "evdb"
            }
          },
          "image": {
            "url": "http://s4.evcdn.com/images/small/I0-001/000/775/183-8.jpeg_/the-breakdown-83.jpeg",
            "width": "48",
            "height": "48",
            "thumb": {
              "url": "http://s4.evcdn.com/images/thumb/I0-001/000/775/183-8.jpeg_/the-breakdown-83.jpeg",
              "width": "48",
              "height": "48"
            },
            "small": {
              "url": "http://s4.evcdn.com/images/small/I0-001/000/775/183-8.jpeg_/the-breakdown-83.jpeg",
              "width": "48",
              "height": "48"
            },
            "medium": {
              "url": "http://s4.evcdn.com/images/medium/I0-001/000/775/183-8.jpeg_/the-breakdown-83.jpeg",
              "width": "128",
              "height": "128"
            }
          },
          "privacy": "1"
        },
        {
          "-id": "E0-001-100760877-5",
          "title": "Sylvan Esso",
          "url": "http://vancouver.eventful.com/events/sylvan-esso-/E0-001-100760877-5?utm_source=apis&utm_medium=apim&utm_campaign=apic",
          "start_time": "2017-08-15 20:00:00",
          "olson_path": "America/Vancouver",
          "venue_id": "V0-001-001057914-6",
          "venue_url": "http://vancouver.eventful.com/venues/commodore-ballroom-/V0-001-001057914-6?utm_source=apis&utm_medium=apim&utm_campaign=apic",
          "venue_name": "Commodore Ballroom",
          "venue_display": "1",
          "venue_address": "868 Granville Street",
          "city_name": "Vancouver",
          "region_name": "British Columbia",
          "region_abbr": "BC",
          "postal_code": "V6Z1K3",
          "country_name": "Canada",
          "country_abbr2": "CA",
          "country_abbr": "CAN",
          "latitude": "49.2806502",
          "longitude": "-123.1208713",
          "geocode_type": "EVDB Geocoder",
          "all_day": "0",
          "created": "2017-02-28 10:53:46",
          "owner": "evdb",
          "modified": "2017-04-27 00:04:30",
          "performers": {
            "performer": {
              "id": "P0-001-014195484-3",
              "url": "http://concerts.eventful.com/performers/sylvan-esso-/P0-001-014195484-3?utm_source=apis&utm_medium=apim&utm_campaign=apic",
              "name": "Sylvan Esso",
              "short_bio": "Musician/Band",
              "creator": "Anthony",
              "linker": "evdb"
            }
          },
          "image": {
            "url": "http://s1.evcdn.com/images/small/I0-001/016/435/308-9.jpeg_/sylvan-esso-08.jpeg",
            "width": "48",
            "height": "48",
            "thumb": {
              "url": "http://s1.evcdn.com/images/thumb/I0-001/016/435/308-9.jpeg_/sylvan-esso-08.jpeg",
              "width": "48",
              "height": "48"
            },
            "small": {
              "url": "http://s1.evcdn.com/images/small/I0-001/016/435/308-9.jpeg_/sylvan-esso-08.jpeg",
              "width": "48",
              "height": "48"
            },
            "medium": {
              "url": "http://s1.evcdn.com/images/medium/I0-001/016/435/308-9.jpeg_/sylvan-esso-08.jpeg",
              "width": "128",
              "height": "128"
            }
          },
          "privacy": "1"
        }
      ]
    }
  }
}


export default ConcertMarquee;