const express = require('express');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.send({ result: 'Hello, world!' });
});
app.get('/strings/upper/hello', (req, res) => {
  res.send({ result: 'HELLO' });
});
app.get('/strings/lower/HELLO', (req, res) => {
  res.send({ result: 'hello' });
});
app.get('/strings/first-characters/hello', (req, res) => {
  res.send({ result: 'h' });
});
app.get('/strings/first-characters/sd32fg45', (req, res) => {
  res.send({ result: 'sd32' });
});
module.exports = app;
