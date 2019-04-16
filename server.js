const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pokemon = require('./pokemon');
const port = 3000;
// const css = require('./style.css');

// app.use('./style.css', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {pokemon: pokemon});
});

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {pokemon: pokemon})
});

app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {pokemon: pokemon[req.params.id]});
});

app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
});























app.listen(port, function() {
  console.log("Server is listening on port", port);
});