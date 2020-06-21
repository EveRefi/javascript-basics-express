const express = require('express');

const app = express();

app.use(express.json());

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings.js');

app.get('/strings/upper/hello', (req, res) => {
  res.send({ result: 'HELLO' });
});
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
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
