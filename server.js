const express = require('express')

let app = express()
const ejs = require ('ejs')

app.set('view engine','ejs')
app.set('views', './views')

const port = 4000

pokemon = require('./models/pokemon')
const pokemon = require('./pokemon')

app.get('/pokemon', (req, res)=>{
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
// app.post('/pokemon/:id',(request,respond)=>{
// 	let id = request.params.id
// 	response.send()
// })

app.listen(port, function(){
	console.log('Pokemon running on port', port);
})

module.exports = app;
