## RoadyMusic

RoadyMusic is a really simply way to discover new live music, especially while you're travelling. This was a final project for a Lighthouse Labs Cohort in 2017. 

Going through concert listing for bands you are unfamiliar with can be tedious and time consuming to find a concert you might be interested in going to. Instead of simply reading through concert listings, RoadyMusic lets you listen to them. 

Simply enter the cities you are interested in attending concerts in, and the genres you like. RoadyMusic will not only return the concert listings for those time periods, but it will generate a playlist for you that you can save to Spotify. 

![demo1](https://github.com/dennyhollick/localplaylist/blob/master/docs/RoadyDemo1.gif)

Now you can listen to that playlist, and if there is a band you like, you can simply return and buy tickets for that concert!

![demo2](https://github.com/dennyhollick/localplaylist/blob/master/docs/RoadyDemo2.gif)

Experience live music listings, instead of reading them!

## Screenshots

This is the main page where users can enter up to 5 destinations, and their travel dates for each. The cities are autocompleted with Google Maps API and the date selector is designed to be effortless.

![mainpage](https://github.com/dennyhollick/localplaylist/blob/master/docs/Roadie1.png)

After selecting travel dates, users select the genres they are most interested in.

![genreselect](https://github.com/dennyhollick/localplaylist/blob/master/docs/Roadie2.png)

After querying the Eventful and Spotify API, a list of concerts is generated for each city along with the top tracks for each artist within that list. The results can be viewed by clicking each dropdown for each city.

![results](https://github.com/dennyhollick/localplaylist/blob/master/docs/Roadie3.png)

The concerts and playlist are displayed here. Users can view the concert information or buy tickets. Below is the generated playlist with the top tracks of artists playing during the time. Users can either preview tracks directly (if Spotify provides a preview link), or can save their playlist that was generated to Spotify.

![playlist](https://github.com/dennyhollick/localplaylist/blob/master/docs/Roadie4.png)

In order to save a playlist to Spotify users first need to grant Oauth access to their Spotify account. 

![oauth](https://github.com/dennyhollick/localplaylist/blob/master/docs/Roadie5.png)

## Setup

To initialize this repo:

- `clone` the repo
- `npm install`
- `npm run dev:server`
- visit 0.0.0.0:3000 in browser
- The sever will refresh whenever changes are made to any app files

### Initialize DB

- `psql -d template1` - You may need to use the superuser login eg. `-U vagrant`
- `CREATE ROLE <username> WITH LOGIN password '<password>';` Set your username and password
- `CREATE DATABASE <dbname> OWNER <role_username>;` Create a database name, and set owner to the role username you just created.
- Copy and configure your .env with the DB info you just created and
- Run `npm run knex migratate:latest`

### Initialize API keys

You'll need unique API keys to use this for Eventful and Spotify. 

Go to both sites developer/API portals and request credentials and update your .env file where there are empty placeholders. 


### If you are doing server side development, nodemon is installed to make it a bit easier:

- `npm run dev:nodemon`
- Everytime a server-side change is made, a new build will be created, so this process is a bit slower.

### To run in a production environment

- `npm run prod:build`
- `npm run prod:server`
- visit 0.0.0.0:3000 in browser

## Known Issues

- Currently Oauth isn't always working. It's a know bug that we're working on. 
- Smaller cities, or cities with no results won't work because of the limits on the API
- Some user interactions don't have feedback such as saving the playlist. We'll add these later once we fix the above issues.