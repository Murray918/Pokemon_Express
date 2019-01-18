
const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()
app.set('view engine', 'ejs')



app.get('/', (req, res)=> {
	res.render('pages/index')
})

app.get('/pokemon', (req, res)=> {
	res.send(pokemon)
})




const PORT = 3000

app.listen(PORT, ()=> {
	console.log('Pokemon-Express running on:', PORT)
})