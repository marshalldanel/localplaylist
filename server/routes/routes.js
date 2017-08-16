const express = require('express');
const querystring = require('querystring');
const request = require('request');
const router = express.Router();
const ENV = process.env.NODE_ENV || 'development';


module.exports = (knex) => {
  
  const app_key = 'KF66pzf2wbptbZW6';
  let categories = 'music_folk';
  let location = 'vancouver';
  let date = '2017081800-2017082000';
  let playlist_id = '1';

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
        console.log(events.event[0]);
        let eventDetails = events.event[0];
        //knex used to insert into Postgres
        knex("concerts").insert({
          "eventful_json": eventDetails,
          "playlist_id": 1
        }).then(function(values){
          console.log("record inserted");
        });
        
      });
  });


  return router;
};