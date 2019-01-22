const express = require('express')
const pokemon = require('./models/pokemon.js')
const path = require('path')
const PORT = 3000

let app = express()

// this links our server to a static public directory
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/pokemon', (request, response) => {
	response.render('pages/index.ejs', {
		component: pokemon,
		page: '../partials/list.ejs',
		cssPath: 'css/style.css'
	})
})

app.listen(PORT)
console.log(`listening on port: ${PORT}`)