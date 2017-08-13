const express = require('express');

const PORT = 3000;

const server = express()
  .use(express.static('../app/public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
  