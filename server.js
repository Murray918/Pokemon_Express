const express = require('express')
const app = express()
const pokemon = require('./pokemon.js')
const ejs = require('ejs')
const bodyparser = require('body-parser')
const PORT = 9000

app.set('views', './view')
app.set('view engine', 'ejs')


app.use(bodyparser.urlencoded(false))
app.use(bodyparser.json())




app.get('/pokemon',(request,response)=>{
	response.render('index.ejs', {
		poke: pokemon,
		page: 'list.ejs'
	})
})
app.get('/pokemon/:id', (request,response)=>{
	response.render('index.ejs',{
		poke: pokemon[request.params.id],
		page: 'show.ejs'
	})
})

app.get('/new',(request,response)=>{
	response.render('enter.ejs',{
		page: 'enter.ejs'
	})
})

app.listen(PORT, ()=>{
	console.log('LISTENING AT PORT:' + PORT)
})