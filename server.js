const express = require('express')
const pokemon = require('./models/pokemon.js')
const PORT = 3000;

let app = express()

app.get('/pokemon', (request, response) => {
	response.send(pokemon)
})

app.listen(PORT)
console.log(`listening on port: ${PORT}`)