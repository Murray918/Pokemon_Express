//dependencies 

const pokemon = require('./models/pokemon')
const express = require('express')
let app = express()

//PORT
const PORT = 3000;


//listener

app.listen(PORT, function () {
console.log('POKEMON GO')
})


//index route
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
	res.send(     {
		thing: 'pokemon'

	})
})


//show route










module.exports = app;