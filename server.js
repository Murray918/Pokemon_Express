const express = require('express')

let app = express()
const ejs = require ('ejs')
const bodyparser = require('body-parser')

app.set('view engine','ejs')
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())


const port = 4000

pokemon = require('./models/pokemon')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
	res.render('index.ejs', {
		pkmn: pokemon,
		page: 'list.ejs'
	})	
})

//index
app.get('/pokemon/:index', (req, res)=>{
	let index = req.params.index
	res.send(pokemon[index])
	res.render('index.ejs',{
		pkmn: pokemon[index],
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

app.listen(port, function(){
	console.log('Pokemon running on port', port);
})

module.exports = app;
