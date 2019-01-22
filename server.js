const express = require('express');
const app = express()
const pokemon = require('./models/pokemon.js')
app.set('view engine', 'ejs')
app.set('views', './views')









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



const port = 3000
app.listen(port, function(){
	console.log('gotta catch em all on port: ', port);
})
module.exports = app;