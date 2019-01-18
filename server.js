const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();
let pokemon = require('./models/pokemon.js');

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/pokemon', (request, response) => {
	response.render('pages/index.ejs', { pokemon: pokemon });
});
app.get('/pokemon/:id', (request, response) => {
	response.render('pages/show.ejs', { pokemon: pokemon[request.params.id] });
});

app.listen(port);

module.exports = app;
