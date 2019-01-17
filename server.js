
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js')



const PORT = 3000;


app.set('view engine', 'ejs')

app.get('/pokemon', (request, response) => {
	response.send(pokemon)
})



app.listen(PORT, function() {
  console.log('My server is set up and running on port: ', PORT);
})