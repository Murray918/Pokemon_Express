//dependencies 

const pokemon = require('./pokemon')
const express = require('express')
let app = express()
const ejs = require ('ejs')
app.set('views', './views' )
app.set('view engine', 'ejs')
//PORT
const PORT = 3000;


//listener

app.listen(PORT, function () {
console.log('POKEMON GO')
})

//read all route
app.get('/pokemon', (req, res)=>{
	
	

	res.send(pokemon)
})



//index route


app.get('/pokemon/:index', (req, res)=>{
	
	let index = req.params.index

	res.send(pokemon[index])
		

	
})


//show route










module.exports = app;