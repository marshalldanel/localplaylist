const express = require('express');
const querystring = require('querystring');
const request = require('request');
const router = express.Router();

module.exports = () => {
  
  const app_key = 'KF66pzf2wbptbZW6';
  let categories = 'music_folk';
  let location = 'vancouver';
  let date = '2017081800-2017082000';

  router.get('/event', (req, res) => {
    let apiResponse = '';
    request.get('http://api.eventful.com/json/events/search?' +
    querystring.stringify({
      app_key: app_key,
      categories: categories,
      location: location,
      date: date
    }))
      .on('data', function (response) {
        apiResponse += response.toString();
        // console.log(apiResponse);
      })
      .on('end', function () {
        let response = JSON.parse(apiResponse);
        let events = response.events;
        console.log(events);
      });
  });


  return router;
};