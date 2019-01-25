//includes, headers, dependencies,
const express = require('express');
const pug = require('pug');
app = express();
module.exports = app;
app.set('view engine', 'pug');
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

// PORT
const port = 3000;
//aquire the pokemon object
let data = require ("./models/pokemon.js");

let fs = require('fs');
let stream = fs.createWriteStream("middleware.txt", {'flag': 'a'});  //open, append the file.

//middleware portion which saves request stats to a file
app.use(function (req, res, next) {
  let newDate = new Date(Date.now());
  	stream.write(`${newDate.toDateString()} ${newDate.toTimeString()}\n`);
  	stream.write("Home page hit by: " + req.connection.remoteAddress + "\n");
  next()
})

app.get("/", function(req,res) {
	res.send("<h1>My pages works Pug Style</h1><a href='pokemon/'>Link to Pokemon");
	//fs.close(fd);
});

app.get("/pokemon", function(req,res) {
	res.render('pages/index', { data: data })
});

app.get("/pokemon/add/", function(req,res) {
	res.render('partials/_post_page')
});

app.get("/pokemon/delete/:id", function(req,res) {
	res.render('partials/_delete_page', { data: data[req.params.id], index: req.params.id })
});

app.get("/pokemon/edit/:id", function(req,res) {
	res.render('partials/_edit_page', { data: data[req.params.id] })
});

app.get("/pokemon/:id", function(req,res) {
	res.render('partials/_show_page', { data: data[req.params.id], index: req.params.id })
});


//npm install body parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/pokemon/', (req,res) => {
	let newPokemon = req.body['pokemon-name'];
	let newPokemonUrl = req.body['pokemon-url'];
	data.push( {name: newPokemon, img: newPokemonUrl });    //'http://img.pokemondb.net/artwork/charmander.jpg'
	res.redirect('/pokemon');
})

app.delete('/pokemon/deleter/:id', (req,res) => {
	data.splice(req.params.id, 1);
	res.redirect('/pokemon/');  //redirect will not work when using AJAX to make the delete request.
	res.end();
})

app.put('/pokemon/edit', (req,res) => {
	response.redirect('/pokemon');
})

// LISTENER
const server = app.listen(port, function() {
  console.log('Pokemon running on port: ', port);
})

module.exports = app;


