const path = require('path');
const express = require('express');
const app = express();

const webpack = require('webpack');
const devserver = require('webpack-dev-middleware');
const hotmodule = require('webpack-hot-middleware');
const webpackconfig = require('../webpack.config.js');
const compiler = webpack(webpackconfig);

const PORT = 3000;
const ENV = process.env.NODE_ENV || 'development';

if(ENV === 'production') {
  app.use(express.static('build'));
} else {
  app.use(devserver(compiler, {
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/
    },
    noInfo: true,
    stats: {
      colors: true
    }
  }));
  app.use(hotmodule(compiler));
}
  
app.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT } in ${ ENV } mode. Wait for compile...`));
  