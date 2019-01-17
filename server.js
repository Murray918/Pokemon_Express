
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js')
const path = require('path')



const PORT = 3000;


app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/pokemon', (request, response) => {
	response.render('pages/index.ejs',{pokemon: pokemon})
})



app.listen(PORT, function() {
  console.log('My server is set up and running on port: ', PORT);
})