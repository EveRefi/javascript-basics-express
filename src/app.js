const express = require('express');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.send({ result: 'Hello, world!' });
});

module.exports = app;
