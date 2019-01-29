
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js')
const path = require('path')
const bodyParser = require('body-parser')

let index = 0


const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/pokemon', (request, response) => {
	response.render('pages/index.ejs',{pokemon: pokemon})
})

app.get('/pokemon/new', (request, response) => {
	response.render('pages/new.ejs')
})

app.get('/pokemon/:id/edit', (request, response) => {
	index = request.params.id
	response.render('pages/edit.ejs')
})

app.post('/pokemon/:id', (request, response) => {
	pokemon[index].name = request.body['name']
	pokemon[index].img = request.body['img']
	response.redirect('/pokemon')
})

app.get('/pokemon/:id', (request, response) => {
	response.render('pages/show.ejs', {pokemon: pokemon[request.params.id]})
})

app.post('/pokemon', (request, response) => {
	let newPokemon = {name: request.body['name'], img: request.body['img']}
	pokemon.push(newPokemon)
	response.redirect('/pokemon')
})

app.listen(PORT, function() {
  console.log('My server is set up and running on port: ', PORT);
})

module.exports=app;