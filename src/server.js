'use strict';

const express = require('express');
const cors = require('cors');
const routes = require('./auth/routes');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');


const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3030;

app.get('/alive', (req, res) => {
  res.status(200).send(' All is good and alive! ');
});
app.get('/error', (req, res, next) => {
  // next('You have encountered an Error !');
  throw new Error('You have encountered an Error !');
});
app.use(routes);
app.use('*', notFoundHandler);
app.use(errorHandler);

// listening function
function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}

// export module for index.js
module.exports = {
    app: app,
  start: start
  };