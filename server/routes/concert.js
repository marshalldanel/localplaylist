const request = require('request');
const querystring = require('querystring');
require('dotenv').config();

module.exports = knex => ({

  getConcertData: (id, query) => {
    return new Promise((resolve, reject) => {
      let apiResponse = '';
      
      const modifiedQuery = {
        location: query.city,
        categories: query.categories,
        date: `${query.start_date}00-${query.end_date}00`,
        page_size: 25,
      };

      const url = `http://api.eventful.com/json/events/search?app_key=${process.env.EVENTFUL_APP_KEY}&${querystring.stringify(modifiedQuery)}`;
      request.get(url)
        .on('data', (response) => {
          apiResponse += response.toString();
        })
        .on('end', () => {
          const response = JSON.parse(apiResponse);
          knex('concerts').insert({
            eventful_json: response,
            playlist_id: id,
          }).then(() => {
            resolve(response);
          });
        });
    });
  },
  
});
