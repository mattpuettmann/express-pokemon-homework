const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pokemon = require('./pokemon');
const methodOverride = require('method-override');
const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));



app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {pokemon: pokemon});
});

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {pokemon: pokemon})
});

app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {pokemon: pokemon[req.params.id], id: req.params.id});
});

app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {pokemon: pokemon[req.params.id], id: req.params.id})
});

app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
});

app.put('/pokemon/:id/', (req, res) => {
    pokemon[req.params.id] = req.body
    res.redirect('/pokemon');
});

app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});




app.listen(port, function() {
  console.log("Server is listening on port", port);
});