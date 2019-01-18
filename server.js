const express = require('express');
const app = express()
const pokemon = require('./models/pokemon.js')
app.set('view engine', 'ejs')










app.get('/pokemon', (request, response) => {
	response.send(pokemon)
})




const port = 3000
app.listen(port, function(){
	console.log('gotta catch em all on port: ', port);
})
module.exports = app;