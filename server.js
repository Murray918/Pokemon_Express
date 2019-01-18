const express = require('express')
const pokemon = require('./models/pokemon.js')
const path = require('path')
const PORT = 3000

let app = express()
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/pokemon', (request, response) => {
	response.render('pages/index.ejs', {
		component: pokemon,
		page: '../partials/list.ejs'
	})
})

app.listen(PORT)
console.log(`listening on port: ${PORT}`)