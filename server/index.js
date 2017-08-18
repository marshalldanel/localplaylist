const path = require('path');
const express = require('express');

const app = express();

// Access enviorment variables

require('dotenv').config();

// Initializes webpack functions on the server, and compiles.

const webpack = require('webpack');
const devserver = require('webpack-dev-middleware');
const hotmodule = require('webpack-hot-middleware');
const webpackconfig = require('../webpack.config.js');

const compiler = webpack(webpackconfig);

// Sets port to 3000, and defaults to development mode unless specified in NODE_ENV

const PORT = 3000;
const ENV = process.env.NODE_ENV || 'development';

// Setup Knex files and connect to database

const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[ENV]);

// Seperate route requires

// const userRoutes = require('./routes/user');
const mainRoute = require('./routes/main');

// This is for body parser
const bodyParser = require('body-parser');

app.use(bodyParser.json({ extended: true }));

// Cookie logic

const shortid = require('shortid');
const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'session',
  keys: ['hksdn'],
  maxAge: 24 * 60 * 60 * 1000,
}));

app.use((req, res, next) => {
  if (!req.session.user_cookie) {
    req.session.user_cookie = shortid.generate();
  }
  next();
});

// Pulls static files from build folder if in production mode, otherwise will start webpack dev server and hotmodule

if (ENV === 'production') {
  app.use(express.static('build'));
} else {
  app.use(devserver(compiler, {
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
    },
    noInfo: true,
    stats: {
      colors: true,
    },
  }));
  app.use(hotmodule(compiler));
}

// If we want to make modules of the routes, then we will 'require' them, and use express.Router(); in those files
// eg. https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get

// Mount all route files

// app.use(userRoutes(knex));
app.use(mainRoute(knex));

// Below is an example API route:

// app.get('/api', function (req, res) {
//   res.send('This is how our API will work!');
// });

// Starts the server
  
app.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT} in ${ENV} mode. Wait for compile...`));
