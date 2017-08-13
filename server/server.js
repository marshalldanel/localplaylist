const express = require('express');

const PORT = 3000;

const server = express()
  .use(express.static('build'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
  