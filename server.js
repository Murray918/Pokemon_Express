const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();
let pokemon = require('./models/pokemon.js');
let idChange = 0;

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/pokemon', (request, response) => {
	response.render('pages/index.ejs', { pokemon: pokemon });
});
app.get('/pokemon/new', (request, response) => {
	response.render('pages/new.ejs', { action: '/pokemon' });
});
app.get('/pokemon/:id/edit', (request, response) => {
	idChange = request.params.id;
	response.render('pages/edit.ejs', { action: '/pokemon/:id' });
});
app.get('/pokemon/:id', (request, response) => {
	response.render('pages/show.ejs', { pokemon: pokemon[request.params.id] });
});
app.put('/pokemon/:id', (request, response) => {
	pokemon[idChange].name = request.body['name'];
	if (request.body['URL'] != '') pokemon[idChange].img = request.body['URL'];
	response.redirect('/pokemon');
});
app.post('/pokemon', (request, response) => {
	pokemon.push({ name: request.body['name'], img: request.body['URL'] });
	response.redirect('/pokemon');
});

app.listen(port);

module.exports = app;
