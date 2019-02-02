
const express = require('express');
const app = express()
const pokemon = require('./models/pokemon.js')
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.set('views', './views')


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())




app.get('/pokemon', (request, response) => {
	response.send(pokemon)
})

app.get('/', (request, response) => {
  response.render('index.ejs', {
  	pkmn: pokemon,
  	page:'list.ejs'
  })
})

app.get('/pokemon/:id', (request, response) =>{
	response.render('index.ejs', {
		pkmn: pokemon[request.params.id],
		page: 'show.ejs'
	})
})

app.get('/new', (request, response) =>{
	response.render('new.ejs')
})

app.post('/pokemon', (request, response) => {
	let newPokemon = {
		name: request.body['name']
	}
	pokemon.push(newPokemon)
	response.redirect('/')
})




const port = 3000
app.listen(port, function(){
	console.log('gotta catch em all on port: ', port);
})
module.exports = app;